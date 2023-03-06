let answer: any;
let currentThread: number = 1

const chat: HTMLInputElement = document.querySelector(".chat");
function createMessage(title: string) {
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

  let cookieData = document.cookie.split(";").map((c) => c.trim());
    for (let i = 0; i < cookieData.length; i++) {
      if (cookieData[i].startsWith("sessionData=")) {
        const userId = firebase.auth().currentUser.uid
      
        let messageInfo: any = {
          question: title,
          answer: answer
        }
      
        firebase.database().ref(`users/${userId}/threads/thread_${currentThread}`).once("value").then(function (snapshot: any) {
          let messageId: any = snapshot.numChildren()
          firebase.database().ref(`users/${userId}/threads/thread_${currentThread}/message_${messageId}`).set(messageInfo)
        })
      }
    }
}
