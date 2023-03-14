function grapIP() {
    fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      answer = `Twój adres IP to: ${data.ip}`
    })
    .catch((error) => console.error(error));
}

function _user(question: string) {
  const userRequest: string = question.substring(6);

  if (userRequest.includes("ip")) {
    grapIP()
  } else {
    answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanego zapytania!`
  }
}
