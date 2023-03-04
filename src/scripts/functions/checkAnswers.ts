function failedQuestion() {
    answer = 'Niestety ale nie udało mi się znaleść odpowiedzi na twoje pytanie, sprawdź czy w mojej dokumentacji znajduję się podane przez ciebie pytanie. Jeśli tak, niezwłocznie zgłoś nam to, że nie wyświetlam odpowiedzi! Jeśli nie, spróbuj nam ją zaproponować!'
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
            
            if (inputValue.includes('+')) {
                result = eval(inputValue);
            } else if (inputValue.includes('-')) {
                result = eval(inputValue);
            } else if (inputValue.includes('*')) {
                result = eval(inputValue);
            } else if (inputValue.includes('/')) {
                result = eval(inputValue);
            } else {
                failedQuestion()
            }

            answer = `Wynikiem podanego działania jest: ${result}`
        }
    } else {
        if (question.includes('/data') || question.includes('/date')) {
            const date = new Date();
            if ((date.getMonth() + 1) > 0 && (date.getMonth() + 1) < 9) {
                answer = `Aktualna data: ${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`
                if (date.getDate() > 0 && date.getDate() < 9) {
                    answer = `Aktualna data: 0${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`
                }
            } else {
                answer = `Aktualna data: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
            }
        } else if (question.includes('/version') || question.includes('/ver') || question.includes('/wersja')) {
            answer = `Aktualna moja wersja to: ${version}`
        } else if (question.includes('/help') || question.includes('/pomoc')) {
            answer = `Szukasz pomocy? zajrzyj na tę <a href="#">stronę</a> aby wyświetlić dokumentację z pełną listą komend oraz poleceń, na które jestem w stanie odpowiedzieć`
        } else if (question.includes('theme') || question.includes('motyw')) {
            toggleTheme()
        } else if (question.includes('/time') || question.includes('/czas')) {
            const date = new Date();
            if (date.getMinutes() <= 9) {
                answer = `Aktualna godzina: ${date.getHours()}:0${date.getMinutes()}`
            } else {
                answer = `Aktualna godzina: ${date.getHours()}:${date.getMinutes()}`
            }
        } else {
            failedQuestion()
        }
    }
}