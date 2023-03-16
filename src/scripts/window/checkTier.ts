function checkTier() {
  let cookieData = document.cookie.split(";").map((c) => c.trim());
  for (let i = 0; i < cookieData.length; i++) {
    if (cookieData[i].startsWith("sessionData=")) {
      tier = "Premium";
    }
  }
}
