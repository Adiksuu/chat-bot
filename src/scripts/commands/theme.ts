const body: HTMLBodyElement = document.querySelector('body')

function _theme() {
    body.classList.toggle('light')
    if (body.classList.contains('light')) {
        answer = '<i class="fas fa-sun"></i> Zmieniono motyw na: jasny'
    } else {
        answer = '<i class="fas fa-moon"></i> Zmieniono motyw na: ciemny'
    }
}