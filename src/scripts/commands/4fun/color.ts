function _color() {
    const color: string = Math.floor(Math.random()*16777215).toString(16);

    answer = `Your generated color is: <span id="" style="color: #${color}">#${color}</span>`
}