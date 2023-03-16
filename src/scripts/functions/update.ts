const update_date: HTMLSpanElement = document.querySelector("#update_date");
const update_version: HTMLSpanElement = document.querySelector("#update_version");
const bot_tier: HTMLSpanElement = document.querySelector("#bot_tier");
const update__info: HTMLParagraphElement = document.querySelector('#update__info')

const version: string = "v1.1.6(1) [Beta]";
const updated: string = "16.03.2023";
const chat_version_box: HTMLSpanElement = document.querySelector('#chat_version')
chat_version_box.innerText = version
update__info.innerHTML = `Najnowsza aktualizacja ${version} wprowadzona ${updated}.<br> Zobacz <span>/news!</span>`
let tier: string = "Standard";
loads.classList.add('show')
input.disabled = true

function update() {
  let cookieData = document.cookie.split(";").map((c) => c.trim());
  for (let i = 0; i < cookieData.length; i++) {
    if (cookieData[i].startsWith("sessionData=")) {
      window.setTimeout(() => {
        loadMessages();
        loadThreads();
        checkTier()
        if (threads.children.length == 0) {
          createThreadNow();
        }
        let cookieData = document.cookie.split(";").map((c) => c.trim());
        for (let i = 0; i < cookieData.length; i++) {
          if (cookieData[i].startsWith("sessionData=")) {
            var sessionData = JSON.parse(cookieData[i].split("=")[1]);
            currentThread = sessionData.thread;
          }
        }
      }, 1500);
    } else {
      tier = "Standard";
    }
  }
  checkCookie()
  update_date.innerHTML = updated;
  update_version.innerHTML = version;
  bot_tier.innerHTML = tier;
}
