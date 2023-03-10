const locate: any = window.location.search;
const user: HTMLElement = document.querySelector(".user");

const input_log: HTMLSpanElement = document.querySelector('#input_log')
const website: HTMLElement = document.querySelector('.website')

if (locate != "?chat") {
  main.style.display = "none";
}
if (locate == "?login" || locate == "?register") {
  user.classList.add("show");
}
if (locate == "") {
  website.classList.add('show')
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
          window.location.search = "?chat";
        }
      } 
    }
  });  
  loads.classList.remove('show')
  input.disabled = false
}, 2500)

window.setInterval(() => {
  if (tier == 'Premium') {
    input_log.style.display = 'none'
  } 
  else if (tier == 'Standard') {
      input_log.style.display = 'flex'
  }
})

function toHome() {
  window.location.search = ''
}
function toChat() {
  window.location.search = '?chat'
}

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");
burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    navbar.classList.toggle("direction");
});