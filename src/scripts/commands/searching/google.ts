function _google(question: string) {
    question = question.substring(8) 
    let googleSearch: string;

    if (question.length == question.split(' ').length - 1 || question == '') {
        answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanej nazwy!`
    } else {
        googleSearch = `https://www.google.com/search?q=${question}`
        answer = `<i class="fab fa-chrome"></i> Wyszukano artykuły w serwisie Google: <a href='${googleSearch}'>Zobacz</a>`
    }
}