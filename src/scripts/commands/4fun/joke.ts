function _joke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
        let joke: string = `${data.setup} ${data.punchline}`

        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pl&dt=t&q=${encodeURIComponent(joke)}`;
        return fetch(url)
          .then(response => response.json())
          .then(data => {
            let translatedText = "";
            data[0].forEach((part: any) => {
              translatedText += part[0];
            });
            answer = `Wygenerowany żart: ${translatedText}`
            return
          });
        })
        .catch((error) => console.error(error));
}
