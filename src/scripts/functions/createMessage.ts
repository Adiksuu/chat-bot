let answer: any;

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
}
