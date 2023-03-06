const locate: any = window.location.search;
const user: HTMLElement = document.querySelector(".user");

const input_log: HTMLSpanElement = document.querySelector('#input_log')

if (locate != "") {
  main.style.display = "none";
}
if (locate == "?login" || locate == "?register") {
  user.classList.add("show");
}
if (locate == "?login") {
  user.children[0].classList.add("show");
} else if (locate == "?register") {
  user.children[1].classList.add("show");
}

window.setTimeout(() => {
  window.setInterval(() => {
    let cookieData = document.cookie.split(";").map((c) => c.trim());
    for (let i = 0; i < cookieData.length; i++) {
      if (cookieData[i].startsWith("sessionData=")) {
        var sessionData = JSON.parse(cookieData[i].split("=")[1]);
        document.cookie = "sessionData=" + JSON.stringify({email: sessionData.email, thread: currentThread}) + ";max-age=3600";
        if (locate == "?register" || locate == "?login") {
          window.location.search = "";
        }
      } 
    }
  });  
}, 2000)

window.setInterval(() => {
  if (tier == 'Premium') {
    input_log.style.display = 'none'
  } 
  else if (tier == 'Standard') {
      input_log.style.display = 'flex'
  }
})