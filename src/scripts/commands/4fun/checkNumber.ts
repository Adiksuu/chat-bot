function _checkNumber(question: string) {
    const ranNumber: number = Math.floor(Math.random() * 10) 

    
    question = question.substring(7)
    if (question.length == question.split(' ').length - 1) {
        answer = `Nie podałeś liczby!`
        return
    }
    const number: number = parseInt(question)

    if (number > 9) {
        answer = `Maksymalna liczba to 9!`
        return
    }
    if (number < 0) {
        answer = `Minimalna liczba to 0!`
        return
    }

    if (number == ranNumber) {
        answer = `Udało ci się zgadnąć numer!`
    } else {
        answer = `Nie udało ci się! Wybrałeś numer ${number} a poprawny numer to był ${ranNumber}`
    }
}