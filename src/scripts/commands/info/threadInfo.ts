function _threadInfo() {
    const threadElements: number = chat.children.length + 1;

    answer = `W tym wątku znajduję się <span id="underline">${threadElements}</span> wiadomości. Wyczyścić je? <span onclick="createMessage('/clear')" id="underline">wyczyść</span>`
}