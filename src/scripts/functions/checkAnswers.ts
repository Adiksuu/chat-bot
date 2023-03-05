function failedQuestion() {
    answer = '<i class="fas fa-circle-exclamation"></i> Niestety ale nie udało mi się znaleść odpowiedzi na twoje pytanie, sprawdź czy w mojej dokumentacji znajduję się podane przez ciebie pytanie. Jeśli tak, niezwłocznie zgłoś nam to, że nie wyświetlam odpowiedzi! Jeśli nie, spróbuj nam ją zaproponować!'
}
function checkAnswer(question: string) {
    if (!question.startsWith('/')) {
        if (!question.includes('+') && !question.includes('-') && !question.includes('*') && !question.includes('/')) {
            if (answers.hasOwnProperty(question)) {
                answer = answers[question];
            } else {
                failedQuestion()
            }
        } else {
            const inputValue = input.value.trim();
            let result;
            if (question.includes('+') || question.includes('-') || question.includes('*') || question.includes('/')) {
                result = eval(inputValue);
            } else {
                failedQuestion()
            }
            answer = `Wynikiem podanego działania jest: ${result}`
        }
    } else {
        if (question.includes('data') || question.includes('date')) {
            _data()
        } else if (question.includes('version') || question.includes('ver') || question.includes('wersja')) {
            _version()
        } else if (question.includes('powtórz') || question.includes('repeat')) {
            _repeat(question)
        } else if (question.includes('help') || question.includes('pomoc')) {
            _help()
        } else if (question.includes('theme') || question.includes('motyw')) {
            _theme()
        } else if (question.includes('time') || question.includes('czas')) {
            _time()
        } else if (question.includes('news') || question.includes('nowości') || question.includes('zmiany') || question.includes('changes')) {
            _update()
        } else if (question.includes('package') || question.includes('pakiet')) {
            _package()
        } else if (question.includes('youtube')) {
            _youtube(question)
        } else if (question.includes('random') || question.includes('los')) {
            _random()
        } else if (question.includes('rps')) {
            _rps(question)
        } else if (question.includes('response') || question.includes('odpowiedz') || question.includes('r')) {
            _response(question)
        } else if (question.includes('count') || question.includes('licz')) {
            _count(question)
        } else {
            failedQuestion()
        }
    }
}