function _youtube(question: string) {
    let searchQuery: any = question.substring(9)
    if (searchQuery.length == searchQuery.split(' ').length - 1 || searchQuery == '') {
        answer = `Nie znaleiono odpowiednich wyników dla podanej nazwy!`
    } else {
        answer = `Wyszukano filmy w serwisie YouTube: <a href="https://www.youtube.com/results?search_query=${searchQuery}">zobacz</a>`
    }
}