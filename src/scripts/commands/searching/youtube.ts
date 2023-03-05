function _youtube(question: string) {
    let searchQuery: string = question.substring(9)
    if (searchQuery.length == searchQuery.split(' ').length - 1 || searchQuery == '') {
        answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanej nazwy!`
    } else {
        answer = `<i class="fab fa-youtube"></i> Wyszukano filmy w serwisie YouTube: <a href="https://www.youtube.com/results?search_query=${searchQuery}">zobacz</a>`
    }
}