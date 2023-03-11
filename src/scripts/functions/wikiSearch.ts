// Funkcja usuwająca sekcje z tekstu
function removeSections(text: any) {
  return text.replace(/\n==[^=]+==\n/g, "\n");
}

// Funkcja usuwająca znaki specjalne z tekstu
function removeSpecialCharacters(text: string) {
  return text.replace(/<\/?[^>]+(>|$)/g, "").replace(/&[^;]+;/g, "");
}
function searchWikipedia(question: any) {

  // Wyślij zapytanie do API Wikipedii
  fetch(
    `https://pl.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${question}&redirects=true&origin=*`
  )
    .then((response) => response.json())
    .then((data) => {
      // Pobierz cały tekst z wyniku zapytania
      const pageId = Object.keys(data.query.pages)[0];
      const pageContent = data.query.pages[pageId].extract;

      // Usuń sekcje i znaki specjalne z tekstu
      const cleanText = removeSections(pageContent);
      const processedText = removeSpecialCharacters(cleanText);

      answer = `<i class="fas fa-face-smile"></i> Odpowiadając na twoje pytanie: ${processedText.slice(0, 1500)} <br><br>Źródło: <a href="https://pl.wikipedia.org/wiki/${question}">kliknij</a>`;
    })
    .catch(error => {
      // Wyślij zapytanie do API Wikipedii
  fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${question}&redirects=true&origin=*`
  )
    .then((response) => response.json())
    .then((data) => {
      // Pobierz cały tekst z wyniku zapytania
      const pageId = Object.keys(data.query.pages)[0];
      const pageContent = data.query.pages[pageId].extract;

      // Usuń sekcje i znaki specjalne z tekstu
      const cleanText = removeSections(pageContent);
      const processedText = removeSpecialCharacters(cleanText);

      let maxLength = Math.floor(Math.random() * 1501)

      const textToTranslate = `${processedText.slice(0, (1000 + maxLength))}`;

      function translateText(text: any) {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pl&dt=t&q=${encodeURIComponent(text)}`;
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

      translateText(textToTranslate)
        .then(translatedText => answer = `<i class="fas fa-face-smile"></i> Odpowiadając na twoje pytanie: ${translatedText}<br><br>Źródło: <a href="https://en.wikipedia.org/wiki/${question}">kliknij</a>`)
        .catch((error) => {
          // console.error(error)
          answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanej nazwy!`
        })
    })
    .catch((error) => {
      // console.error(error)
      answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanej nazwy!`
    })
})
}
