function _color() {
    const color: string = Math.floor(Math.random()*16777215).toString(16);

    answer = `Twój wygenerowany kolor: <span style="color: #${color}">#${color}</span>`
}