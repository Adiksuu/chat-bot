function failedQuestion() {
    answer = '<i class="fas fa-circle-exclamation"></i> Niestety ale nie udało mi się znaleść odpowiedzi na twoje pytanie, sprawdź czy w mojej dokumentacji znajduję się podane przez ciebie pytanie. Jeśli tak, niezwłocznie zgłoś nam to, że nie wyświetlam odpowiedzi! Jeśli nie, spróbuj nam ją zaproponować!'
}
function checkAnswer(question: string) {
    if (!question.startsWith('/')) {
        if (!question.includes('+') && !question.includes('-') && !question.includes('*') && !question.includes('/')) {
            if (answers.hasOwnProperty(question)) {
                answer = answers[question];
            } else {
                searchWikipedia(question)
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
        } else if (question.includes('threadinfo')) {
            _threadInfo()
        } else if (question.includes('user')) {
            _user(question)
        } else if (question.includes('joke')) {
            _joke()
        } else if (question.includes('offend')) {
            _offend(question)
        } else if (question.includes('/randomimage')) {
            _randomImage()
        } else if (question.includes('/docs')) {
            _docs()
        } else if (question.includes('/check')) {
            _checkNumber(question)
        } else if (question.includes('translate')) {
            _translate(question)
        } else if (question.includes('emoji')) {
            _emoji(question)
        } else if (question.includes('color')) {
            _color()
        } else if (question.includes('math')) {
            _randomMath()
        } else if (question.includes('/thread')) {
            _changeCurrentThread(question)
        } else if (question.includes('todo')) {
            _todo()
        } else if (question.includes('powtórz') || question.includes('repeat')) {
            _repeat(question)
        } else if (question.includes('help') || question.includes('pomoc')) {
            _help()
        } else if (question.includes('theme') || question.includes('motyw')) {
            _theme()
        } else if (question.includes('wikipedia')) {
            _wikipedia(question)
        } else if (question.includes('google')) {
            _google(question)
        } else if (question.includes('time') || question.includes('czas')) {
            _time()
        } else if (question.includes('news') || question.includes('nowości') || question.includes('zmiany') || question.includes('changes')) {
            _update()
        } else if (question.includes('package') || question.includes('pakiet')) {
            _package()
        } else if (question.includes('youtube')) {
            _youtube(question)
        } else if (question.includes('clear') || question.includes('wyczysc') || question.includes('czyszczenie')) {
            _clear()
        } else if (question.includes('random') || question.includes('los')) {
            _random()
        } else if (question.includes('coinflip') || question.includes('rzut monetą')) {
            _flip()
        } else if (question.includes('rps')) {
            _rps(question)
        } else if (question.includes('response') || question.includes('odpowiedz') || question.includes('r')) {
            _response(question)
        } else if (question.includes('count') || question.includes('licz')) {
            _count(question)
        } else if (question.includes('socials') || question.includes('sociale')) {
            _socials()
        } else {
            failedQuestion()
        }
    }
}