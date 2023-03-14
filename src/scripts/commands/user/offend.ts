function _offend(name: string) {
    const typedName: string = name.substring(8);

    const randomID: number = Math.floor(Math.random() * namesDescriptions.length)
    const randomDesc: string = namesDescriptions[randomID].desc

    answer = `Wygenerowany opis imienia "${typedName}" to: ${randomDesc}`
}