function _wikipedia(question: string) {
    question = question.substring(11) 
    let wikiSearch: string;

    if (question.length == question.split(' ').length - 1 || question == '') {
        answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanej nazwy!`
    } else {
        wikiSearch = `https://pl.wikipedia.org/wiki/${question}`
        answer = `<i class="fab fa-wikipedia-w"></i> Wyszukano artykuły w serwisie Wikipedia: <a href='${wikiSearch}'>Zobacz</a>`
    }
}