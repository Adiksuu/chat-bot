function changeThreadTo(thread: any) {
    currentThread = parseInt(thread)
    window.location.reload()
}

function _changeCurrentThread(question: string) {
    question = question.substring(8) 

    if (firebase.auth().currentUser) {
        if (question == '') {
            answer = `<i class="fas fa-circle-exclamation"></i> Nie podałeś numeru wątku!`
            return;
        }

        if ((parseInt(question) > threads.children.length) || parseInt(question) == 0) {
            answer = `<i class="fas fa-circle-exclamation"></i> Wątek <span id="underline">${question}</span> nie istnieje!`
        } else {
            answer = `<i class="fas fa-circle-check"></i> Zmień wątek na <span id="underline" onclick='changeThreadTo(${question})'>${question}</span>`
        }
    } else {
        answer = `<i class="fas fa-circle-exclamation"></i> Nie masz uprawnień do korzystania z tej komendy! Musisz posiadać pakiet Premium! Aktualny: ${tier}`
    }
    
}