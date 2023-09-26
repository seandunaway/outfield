#!/usr/bin/env node

import {JSDOM} from 'jsdom'

let magic_number = parseFloat(process.argv[2]) || 0.10

let dom = await JSDOM.fromURL('https://finance.yahoo.com/quote/SPY/options')
let document = dom.window.document

let options = []
let tables = document.querySelectorAll('table')
for (let table of tables) {
    let type
    if (table.classList.contains('calls')) type = 'call'
    else if (table.classList.contains('puts')) type = 'put'
    else continue

    let rows = table.querySelectorAll('tbody tr')
    for (let row of rows) {
        let itm = row.classList.contains('in-the-money')
        let strike_text = row.querySelector('td.data-col2 a')?.textContent
        let price_text = row.querySelector('td.data-col3')?.textContent

        if (!strike_text || !price_text) throw new Error()

        let strike = parseInt(strike_text)
        let price = parseFloat(price_text)

        options.push({type, itm, strike, price})
    }
}

let call_strike_count = 0
for (let i = 0; i <= options.length - 1; i++) {
    if (options[i].type !== 'call') continue
    if (options[i].itm) continue
    call_strike_count++
    if (options[i].price <= magic_number) break
}

let put_strike_count = 0
for (let i = options.length - 1; i >= 0; i--) {
    if (options[i].type !== 'put') continue
    if (options[i].itm) continue
    put_strike_count++
    if (options[i].price <= magic_number) break
}

console.info(`+${call_strike_count} -${put_strike_count}`)
