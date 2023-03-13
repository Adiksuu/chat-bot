function _randomImage() {
    const generatedId: number = Math.floor(Math.random() * 1001)
    answer = `Twój wygenerowany obraz to: <img src="https://picsum.photos/id/${generatedId}/256/128/"></img>`
}