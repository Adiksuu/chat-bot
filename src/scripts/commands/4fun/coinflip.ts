function _flip() {
    const fliped: number = Math.floor(Math.random() * 2)
    let flip: string;

    if (fliped == 0) {
        flip = 'Orzeł'
    }
    else if (fliped == 1) {
        flip = 'Reszka'
    }

    answer = `Rzut monetą (50/50) wskazuje na: ${flip}`
}