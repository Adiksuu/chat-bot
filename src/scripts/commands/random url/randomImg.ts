function _randomImage() {
    const generatedId: number = Math.floor(Math.random() * 10001)
    const generatedWidth: number = 150 + Math.floor(Math.random() * 600)

    answer = `Twój wygenerowany obraz to: <img src="https://source.unsplash.com/random/${generatedWidth}x200?sig=${generatedId}"></img>`
}