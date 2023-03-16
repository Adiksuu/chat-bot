const popup: HTMLDivElement = document.querySelector("#popup");
function closeUpdate() {
  popup.classList.remove("active");
  setInput("/news");
  document.cookie ="news=" + JSON.stringify({ newsAccepted: true }) + ";max-age=86400";
}

function checkCookie() {
  let cookieData = document.cookie.split(";").map((c) => c.trim());
  for (let i = 0; i < cookieData.length; i++) {
    if (cookieData[i].startsWith("news=")) {
      var sessionData = JSON.parse(cookieData[i].split("=")[1]);
      popup.classList.remove("active");
    }
  }
}
