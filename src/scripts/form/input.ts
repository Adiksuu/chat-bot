const form: HTMLFormElement = document.querySelector('#input_form')
const input: HTMLInputElement = document.querySelector('#input')

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if ((input.value.length - input.value.split(' ').length - 1) > -2) {
        createMessage(input.value)
        let interval = window.setInterval(() => {
            input.value = input.value.substring(1)
            if (input.value.length == 0) {
                clearInterval(interval)
            }
        },20)
    }
});

const reg_form: HTMLFormElement = document.querySelector('#reg_form')
const log_form: HTMLFormElement = document.querySelector('#log_form')

reg_form.addEventListener('submit', function(event) {
    event.preventDefault();

    register()
})
log_form.addEventListener('submit', function(event) {
    event.preventDefault();

    login()
})