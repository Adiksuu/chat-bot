const form: HTMLFormElement = document.querySelector('#input_form')
const input: HTMLInputElement = document.querySelector('#input')

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if ((input.value.length - input.value.split(' ').length - 1) > -2) {
        // console.log(input.value)
        createMessage(input.value)
        input.value = ''
        // while (input.value.length != 0) {
        //     input.value = input.value.substring(1)
        // }
    }
});