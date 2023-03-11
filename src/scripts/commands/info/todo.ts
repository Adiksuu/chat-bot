function _todo() {
    const todo: any = [
        {
            todos: '1. Wprowadzić funkcjonalność płatnego pakietu premium, który będzie wprowadzał więcej funkcji, komend oraz lepsze UI <i class="fas fa-check-circle"></i>'
        },
        {
            todos: '2. Wprowadzić większe grono pytań oraz ich odpowiedzi <i class="fas fa-check-circle"></i>'
        },
        {
            todos: '3. Dodać funkcjonalność losowych odpowiedzi na dane pytanie <i class="fas fa-ban"></i>'
        },
        {
            todos: '4. Podłączyć stronę pod bazę danych, tak aby wątki były zapisywane w historii <i class="fas fa-check-circle"></i>'
        },
        {
            todos: '5. Wprowadzić dokumentacje ChatBota z całą listą dostępncyh komend oraz pytań <i class="fas fa-check-circle"></i>'
        },
        {
            todos: '6. Dodać funkcjonalność podpowiadania pytań oraz komend w inpucie <i class="fas fa-ban"></i>'
        }
    ]

    answer = ''
    for (let index = 0; index < todo.length; index++) {
        answer += `${todo[index].todos}<br>`
    }
}