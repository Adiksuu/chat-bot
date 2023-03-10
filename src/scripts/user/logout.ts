function logout() {
    tier = 'Standard'
    let cookieData = document.cookie.split(";").map((c) => c.trim());
  for (let i = 0; i < cookieData.length; i++) {
    if (cookieData[i].startsWith("sessionData=")) {
      document.cookie =
        "sessionData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.reload()
    }
}
}