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

      answer = `<i class="fas fa-face-smile"></i> Odpowiadając na twoje pytanie: ${processedText.slice(0, 1500)}`;
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

      answer = `<i class="fas fa-face-smile"></i> Odpowiadając na twoje pytanie: ${processedText.slice(0, 1500)}`;
    })
    .catch(error => console.log(error));
    });
}

