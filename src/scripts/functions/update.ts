const update_date: HTMLSpanElement = document.querySelector("#update_date");
const update_version: HTMLSpanElement =
  document.querySelector("#update_version");
const bot_tier: HTMLSpanElement = document.querySelector("#bot_tier");

const version: string = "v1.0.7 [Beta]";
const updated: string = "06.03.2023";
let tier: string = "Standard";

function update() {
  let cookieData = document.cookie.split(";").map((c) => c.trim());
  for (let i = 0; i < cookieData.length; i++) {
    if (cookieData[i].startsWith("sessionData=")) {
      tier = "Premium";
      window.setTimeout(() => {
        loadMessages();
        loadThreads();
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
  update_date.innerHTML = updated;
  update_version.innerHTML = version;
  bot_tier.innerHTML = tier;
}
