function _rps(question: string) {
    let botSelect: number = Math.floor(Math.random() * 3)

    // 0 - ROCK 1 - PAPER 2 - SCISSORS

    // question = question.substring()

    // ROCK - BOT
    if (botSelect == 0 && question.includes('rock')) {
        answer = `Bot też wybrał kamień! Remis!`
    } 
    else if (botSelect == 0 && question.includes('paper')) {
        answer = `Bot wybrał kamień! Wygrywasz!`
    } 
    else if (botSelect == 0 && question.includes('scissors')) {
        answer = `Bot wybrał kamień! Przegrywasz!`
    }
    // PAPER - BOT
    else if (botSelect == 1 && question.includes('rock')) {
        answer = `Bot wybrał papier! Przegrywasz!`
    }
    else if (botSelect == 1 && question.includes('paper')) {
        answer = `Bot też wybrał papier! Remis!`
    } 
    else if (botSelect == 1 && question.includes('scissors')) {
        answer = `Bot wybrał papier! Wygrywasz!`
    }
    // SCISSORS - BOT
    else if (botSelect == 2 && question.includes('rock')) {
        answer = `Bot wybrał nożyce! Wygrywasz!`
    }
    else if (botSelect == 2 && question.includes('paper')) {
        answer = `Bot wybrał nożyce! Przegrywasz!`
    } 
    else if (botSelect == 2 && question.includes('scissors')) {
        answer = `Bot też wybrał nożyce! Remis!`
    }
    else {
        answer = '<i class="fas fa-circle-exclamation"></i> Wystąpił błąd! Spróbuj ponownie'
    }
}