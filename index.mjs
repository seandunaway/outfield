#!/usr/bin/env node

import {parseArgs} from 'node:util'
import {JSDOM} from 'jsdom'

let {values, positionals} = parseArgs({
    options: {
        price: {short: 'p', type: 'string', default: '0.10'},
        symbol: {short: 's', type: 'string', default: 'SPY'},
        encode: {short: 'e', type: 'boolean', default: false},
        help: {short: 'h', type: 'boolean'},
    },
    strict: false,
})
if (values.help || positionals.length) {
    console.error('usage: [-p|--price <price>] [-s|--symbol <symbol>] [-e|--encode] [-h|--help]')
    process.exit(1)
}

let symbol = /** @type {string} */ (values.symbol).toUpperCase()
let price_float = parseFloat(/** @type {string} */ (values.price))

let dom = await JSDOM.fromURL(`https://finance.yahoo.com/quote/${symbol}/options`)
let document = dom.window.document

let quote_text = document.querySelector('[data-test="qsp-price"]')?.textContent
if (!quote_text) throw new Error()
let quote = parseFloat(quote_text)

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
        let bid_text = row.querySelector('td.data-col4')?.textContent
        let ask_text = row.querySelector('td.data-col5')?.textContent

        if (!strike_text || !price_text || !bid_text || !ask_text) throw new Error()

        let strike = parseInt(strike_text)
        let price = parseFloat(price_text)
        let bid = parseFloat(bid_text)
        let ask = parseFloat(ask_text)

        options.push({type, itm, strike, price, bid, ask})
    }
}

let call_strike_count = 0
let call_strike_amount = 0.0
for (let i = 0; i <= options.length - 1; i++) {
    if (options[i].type !== 'call') continue
    if (options[i].itm) continue

    call_strike_count++
    call_strike_amount += options[i].ask

    if (options[i].price <= price_float) break
}

let put_strike_count = 0
let put_strike_amount = 0.0
for (let i = options.length - 1; i >= 0; i--) {
    if (options[i].type !== 'put') continue
    if (options[i].itm) continue

    put_strike_count++
    put_strike_amount += options[i].ask

    if (options[i].price <= price_float) break
}

if (!call_strike_amount && !put_strike_amount) process.exit(1)

let output = ''
output += `${symbol}:${quote.toFixed(2)}`
output += ' '
output += `+${call_strike_count} ($${call_strike_amount.toFixed(2)})`
output += ' '
output += `-${put_strike_count} ($${put_strike_amount.toFixed(2)})`
output += ' '
output += `x${(put_strike_amount/call_strike_amount).toFixed(2)}`

if (values.encode) output = encodeURIComponent(output)

console.info(output)
