const update_date: HTMLSpanElement = document.querySelector('#update_date')
const update_version: HTMLSpanElement = document.querySelector('#update_version')

const version: string = 'v1.0.0 [Beta]'
function update() {
    update_date.innerHTML = '04.03.2023'
    update_version.innerHTML = version
}