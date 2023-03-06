const main: HTMLDivElement = document.querySelector('.main')

window.setInterval(() => {
    if (tier == 'Premium') {
        main.classList.add('premium')
    } 
    else if (tier == 'Standard') {
        main.classList.remove('premium')
    }
})