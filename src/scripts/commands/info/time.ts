function _time() {
    const date = new Date();
    if (date.getMinutes() <= 9) {
        answer = `Aktualna godzina: ${date.getHours()}:0${date.getMinutes()}`
    } else {
        answer = `Aktualna godzina: ${date.getHours()}:${date.getMinutes()}`
    }
}