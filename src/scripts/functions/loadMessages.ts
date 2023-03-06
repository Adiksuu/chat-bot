function loadMessage(title: any) {
    let message = document.createElement("div");

  title = title.toLowerCase()
  checkAnswer(title)

  message.classList.add("message");
  message.innerHTML = `<div class="message_title"><p>${title}</p></div><div class="message_content"><p>${answer}</p></div>`;

  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight
  window.setTimeout(() => {
    message.classList.add('anim')
  }, 150)
}

function loadMessages() {
    const userId = firebase.auth().currentUser.uid
    chat.innerHTML = ''
    
    firebase.database().ref(`users/${userId}/threads/thread_${currentThread}`).once("value").then(function (snapshot: any) {
        let messagesCount: any = snapshot.numChildren()

        for (let index = 1; index < messagesCount; index++) {
          firebase.database().ref(`users/${userId}/threads/thread_${currentThread}/message_${index}`).once("value").then(function (snapshot: any) { 
            // chat.innerHTML = ''
            loadMessage(snapshot.val().question)
          })            
        }
    })
}

function loadThreads() {
  const userId = firebase.auth().currentUser.uid
  firebase.database().ref(`users/${userId}/threads/`).once("value").then(function (snapshot: any) {
    let threadsCount: any = snapshot.numChildren()

    for (let index = 0; index < threads.children.length; index++) {
      threads.children[index].classList.remove('active')
  }

    for (let index = 1; index < threadsCount; index++) {
      createThreadEmpty()
      reloadThreads();
    }
    window.setTimeout(() => {
      threads.children[currentThread - 1].classList.add('active')
    }, 1000)
  })
}