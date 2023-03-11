function _translate(question: string) {
    const toTranslate: string = question.substring(11)

    function translateText(text: any) {
      if (toTranslate.length == toTranslate.split(' ').length - 1 || toTranslate == '') {
        answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanego tekstu!`
        return
      }
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pl&dt=t&q=${encodeURIComponent(toTranslate)}`;
        return fetch(url)
          .then(response => response.json())
          .then(data => {
            let translatedText = "";
            data[0].forEach((part: any) => {
              translatedText += part[0];
            });
            return translatedText;
          });
      }

      if (toTranslate.length == toTranslate.split(' ').length - 1 || toTranslate == '') {
        answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanego tekstu!`
        return
      }

      translateText(toTranslate).then((translatedText) => {
        answer = `<i class="fas fa-face-smile"></i> Przed tłumaczeniem:<br> ${toTranslate}<br><br><i class="fas fa-face-smile"></i> Po tłumaczeniu: <br>${translatedText}`
      })
    }