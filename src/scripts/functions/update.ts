const update_date: HTMLSpanElement = document.querySelector('#update_date')
const update_version: HTMLSpanElement = document.querySelector('#update_version')

const version: string = 'v1.0.1 [Beta]'
const updated: string = '04.03.2023'

function update() {
    update_date.innerHTML = updated
    update_version.innerHTML = version
}