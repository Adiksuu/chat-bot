const update_date: HTMLSpanElement = document.querySelector('#update_date')
const update_version: HTMLSpanElement = document.querySelector('#update_version')
const bot_tier: HTMLSpanElement = document.querySelector('#bot_tier')

const version: string = 'v1.0.2 [Beta]'
const updated: string = '04.03.2023'
const tier: string = 'Standard'

function update() {
    update_date.innerHTML = updated
    update_version.innerHTML = version
    bot_tier.innerHTML = tier
}