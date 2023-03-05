let counter: number = 0
function _count(question: string) {
    if (question.includes('+')) {
        counter++
    } else if (question.includes('-')) {
        counter--
    } else if (question.includes('reset')) {
        counter = 0
    }
    answer = `Liczba wynosi teraz: ${counter}`
}