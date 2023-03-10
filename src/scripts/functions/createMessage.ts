let answer: any;
let currentThread: number = 1

const chat: HTMLInputElement = document.querySelector(".chat");
const loads: HTMLDivElement = document.querySelector('.loads')
function createMessage(title: string) {
  let message = document.createElement("div");

  title = title.toLowerCase()
  checkAnswer(title)

  message.classList.add("message");
  loads.classList.add('show')
  input.disabled = true
  window.setTimeout(() => {
    message.innerHTML = `<div class="message_title"><p>${title}</p></div><div class="message_content"><p>${answer}</p></div>`;
  }, 2500)

  chat.appendChild(message);
  window.setTimeout(() => {
    message.classList.add('anim')
    chat.scrollTop = chat.scrollHeight
    loads.classList.remove('show')
    input.disabled = false
  }, 2500)

  let cookieData = document.cookie.split(";").map((c) => c.trim());
    for (let i = 0; i < cookieData.length; i++) {
      if (cookieData[i].startsWith("sessionData=")) {
        const userId = firebase.auth().currentUser.uid
      
        window.setTimeout(() => {
          let messageInfo: any = {
            question: title,
            answer: answer
          }
        
          firebase.database().ref(`users/${userId}/threads/thread_${currentThread}`).once("value").then(function (snapshot: any) {
            let messageId: any = snapshot.numChildren()
            firebase.database().ref(`users/${userId}/threads/thread_${currentThread}/message_${messageId}`).set(messageInfo)
          })
        }, 2500)
      }
    }
}
