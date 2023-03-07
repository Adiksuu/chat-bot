function _randomMath() {
    let firstNumber: number = Math.floor(Math.random() * 1001)
    let secondNumber: number = Math.floor(Math.random() * 1001)

    let selected: number = Math.floor(Math.random() * 5)
    let exponentiation: number = Math.floor(Math.random() * 3)

    if (selected == 0) {
        answer = `Wylosowane działanie dla ciebie to: ${firstNumber} + ${secondNumber}`
    } 
    else if (selected == 1) {
        answer = `Wylosowane działanie dla ciebie to: ${firstNumber} - ${secondNumber}`
    }
    else if (selected == 2) {
        answer = `Wylosowane działanie dla ciebie to: ${firstNumber} * ${secondNumber}`
    }
    else if (selected == 3) {
        answer = `Wylosowane działanie dla ciebie to: ${firstNumber} / ${secondNumber}`
    }
    else if (selected == 4) {
        if (exponentiation == 0) {
            answer = `Wylosowane działanie dla ciebie to: ${firstNumber} ^2`
        } 
        else if (exponentiation == 1) {
            answer = `Wylosowane działanie dla ciebie to: ${firstNumber} ^3`
        }
        else if (exponentiation == 2) {
            answer = `Wylosowane działanie dla ciebie to: ${firstNumber} ^4`
        }
    }
}