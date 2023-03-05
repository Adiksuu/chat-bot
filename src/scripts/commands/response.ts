function _response(question: string) {
    const random: number = Math.floor(Math.random() * 6)
    let res: string

    if (random == 0) {
        res = 'Tak'
    } else if (random == 1) {
        res = 'Nie'
    } else if (random == 2) {
        res = 'Nie wiem'
    } else if (random == 3) {
        res = 'Być może'
    } else if (random == 4) {
        res = 'Chyba tak'
    } else if (random == 5) {
        res = 'Chyba nie'
    }

    if (question.includes('/response')) {
        question = question.substring(10)
    } else if (question.includes('/r')) {
        question = question.substring(3)
    } else {
        question = question.substring(11)
    }

    answer = `Odpowiedzią na twoje pytanie "${question}" to: ${res}`
}