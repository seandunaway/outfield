# outfield

count strikes away from **at the money** to specified price


### install

`npm install`

to [spit](https://github.com/seandunaway/spit) at open

`crontab ./crontab`


### run

```
$ ./index.mjs -h

usage: [-p|--price <price>] [-s|--symbol <symbol>] [-e|--encode] [-h|--help]

$ ./index.mjs -s tsla -p 0.20

+11 -10

$ ./index.mjs

+8 -8
```

defaults to SPY options at $0.10


### uninstall

`crontab -r`


### options[]
```js
[
  { type: 'call', itm: true, strike: 368, price: 63.45 },
  { type: 'call', itm: true, strike: 369, price: 62.17 },
  { type: 'call', itm: true, strike: 370, price: 61.48 },
  { type: 'call', itm: true, strike: 376, price: 55.86 },
  { type: 'call', itm: true, strike: 379, price: 54.89 },
  { type: 'call', itm: true, strike: 380, price: 51.44 },
  { type: 'call', itm: true, strike: 382, price: 48.85 },
  { type: 'call', itm: true, strike: 386, price: 43.4 },
  { type: 'call', itm: true, strike: 390, price: 43.95 },
  { type: 'call', itm: true, strike: 393, price: 40.93 },
  { type: 'call', itm: true, strike: 394, price: 39.91 },
  { type: 'call', itm: true, strike: 400, price: 30.1 },
  { type: 'call', itm: true, strike: 403, price: 27.6 },
  { type: 'call', itm: true, strike: 405, price: 26.2 },
  { type: 'call', itm: true, strike: 409, price: 24.85 },
  { type: 'call', itm: true, strike: 410, price: 21.4 },
  { type: 'call', itm: true, strike: 412, price: 19.4 },
  { type: 'call', itm: true, strike: 413, price: 18.25 },
  { type: 'call', itm: true, strike: 414, price: 17.21 },
  { type: 'call', itm: true, strike: 415, price: 16.8 },
  { type: 'call', itm: true, strike: 416, price: 15.47 },
  { type: 'call', itm: true, strike: 417, price: 14.25 },
  { type: 'call', itm: true, strike: 418, price: 12.18 },
  { type: 'call', itm: true, strike: 419, price: 12.73 },
  { type: 'call', itm: true, strike: 420, price: 11.29 },
  { type: 'call', itm: true, strike: 421, price: 10.42 },
  { type: 'call', itm: true, strike: 422, price: 9.46 },
  { type: 'call', itm: true, strike: 423, price: 9.38 },
  { type: 'call', itm: true, strike: 424, price: 8.26 },
  { type: 'call', itm: true, strike: 425, price: 6.68 },
  { type: 'call', itm: true, strike: 426, price: 6.51 },
  { type: 'call', itm: true, strike: 427, price: 5.68 },
  { type: 'call', itm: true, strike: 428, price: 4.69 },
  { type: 'call', itm: true, strike: 429, price: 3.95 },
  { type: 'call', itm: true, strike: 430, price: 3.04 },
  { type: 'call', itm: true, strike: 431, price: 2.29 },
  { type: 'call', itm: true, strike: 432, price: 1.67 },
  { type: 'call', itm: false, strike: 433, price: 1.11 },
  { type: 'call', itm: false, strike: 434, price: 0.72 },
  { type: 'call', itm: false, strike: 435, price: 0.43 },
  { type: 'call', itm: false, strike: 436, price: 0.24 },
  { type: 'call', itm: false, strike: 437, price: 0.13 },
  { type: 'call', itm: false, strike: 438, price: 0.07 },
  { type: 'call', itm: false, strike: 439, price: 0.03 },
  { type: 'call', itm: false, strike: 440, price: 0.02 },
  { type: 'call', itm: false, strike: 441, price: 0.02 },
  { type: 'call', itm: false, strike: 442, price: 0.01 },
  { type: 'call', itm: false, strike: 443, price: 0.01 },
  { type: 'call', itm: false, strike: 444, price: 0.01 },
  { type: 'call', itm: false, strike: 445, price: 0.01 },
  { type: 'call', itm: false, strike: 446, price: 0.01 },
  { type: 'call', itm: false, strike: 447, price: 0.01 },
  { type: 'call', itm: false, strike: 448, price: 0.01 },
  { type: 'call', itm: false, strike: 449, price: 0.01 },
  { type: 'call', itm: false, strike: 450, price: 0.01 },
  { type: 'call', itm: false, strike: 451, price: 0.01 },
  { type: 'call', itm: false, strike: 452, price: 0.01 },
  { type: 'call', itm: false, strike: 453, price: 0.01 },
  { type: 'call', itm: false, strike: 454, price: 0.01 },
  { type: 'call', itm: false, strike: 455, price: 0.01 },
  { type: 'call', itm: false, strike: 456, price: 0.01 },
  { type: 'call', itm: false, strike: 457, price: 0.01 },
  { type: 'call', itm: false, strike: 458, price: 0.01 },
  { type: 'call', itm: false, strike: 459, price: 0.01 },
  { type: 'call', itm: false, strike: 460, price: 0.01 },
  { type: 'call', itm: false, strike: 461, price: 0.02 },
  { type: 'call', itm: false, strike: 462, price: 0.02 },
  { type: 'call', itm: false, strike: 463, price: 0.01 },
  { type: 'call', itm: false, strike: 464, price: 0.01 },
  { type: 'call', itm: false, strike: 465, price: 0.01 },
  { type: 'call', itm: false, strike: 466, price: 0.01 },
  { type: 'call', itm: false, strike: 467, price: 0.01 },
  { type: 'call', itm: false, strike: 469, price: 0.03 },
  { type: 'call', itm: false, strike: 470, price: 0.01 },
  { type: 'call', itm: false, strike: 471, price: 0.01 },
  { type: 'call', itm: false, strike: 474, price: 0.01 },
  { type: 'call', itm: false, strike: 475, price: 0.01 },
  { type: 'call', itm: false, strike: 477, price: 0.01 },
  { type: 'call', itm: false, strike: 479, price: 0.01 },
  { type: 'call', itm: false, strike: 480, price: 0.01 },
  { type: 'call', itm: false, strike: 483, price: 0.01 },
  { type: 'call', itm: false, strike: 515, price: 0.01 },
  { type: 'put', itm: false, strike: 376, price: 0.03 },
  { type: 'put', itm: false, strike: 377, price: 0.01 },
  { type: 'put', itm: false, strike: 378, price: 0.01 },
  { type: 'put', itm: false, strike: 379, price: 0.01 },
  { type: 'put', itm: false, strike: 380, price: 0.01 },
  { type: 'put', itm: false, strike: 381, price: 0.01 },
  { type: 'put', itm: false, strike: 382, price: 0.01 },
  { type: 'put', itm: false, strike: 383, price: 0.01 },
  { type: 'put', itm: false, strike: 384, price: 0.01 },
  { type: 'put', itm: false, strike: 385, price: 0.01 },
  { type: 'put', itm: false, strike: 386, price: 0.01 },
  { type: 'put', itm: false, strike: 387, price: 0.01 },
  { type: 'put', itm: false, strike: 388, price: 0.01 },
  { type: 'put', itm: false, strike: 389, price: 0.02 },
  { type: 'put', itm: false, strike: 390, price: 0.01 },
  { type: 'put', itm: false, strike: 391, price: 0.01 },
  { type: 'put', itm: false, strike: 392, price: 0.02 },
  { type: 'put', itm: false, strike: 393, price: 0.02 },
  { type: 'put', itm: false, strike: 394, price: 0.02 },
  { type: 'put', itm: false, strike: 395, price: 0.02 },
  { type: 'put', itm: false, strike: 396, price: 0.02 },
  { type: 'put', itm: false, strike: 397, price: 0.01 },
  { type: 'put', itm: false, strike: 398, price: 0.01 },
  { type: 'put', itm: false, strike: 399, price: 0.02 },
  { type: 'put', itm: false, strike: 400, price: 0.02 },
  { type: 'put', itm: false, strike: 401, price: 0.03 },
  { type: 'put', itm: false, strike: 402, price: 0.02 },
  { type: 'put', itm: false, strike: 403, price: 0.02 },
  { type: 'put', itm: false, strike: 404, price: 0.02 },
  { type: 'put', itm: false, strike: 405, price: 0.02 },
  { type: 'put', itm: false, strike: 406, price: 0.03 },
  { type: 'put', itm: false, strike: 407, price: 0.02 },
  { type: 'put', itm: false, strike: 408, price: 0.02 },
  { type: 'put', itm: false, strike: 409, price: 0.03 },
  { type: 'put', itm: false, strike: 410, price: 0.03 },
  { type: 'put', itm: false, strike: 411, price: 0.03 },
  { type: 'put', itm: false, strike: 412, price: 0.02 },
  { type: 'put', itm: false, strike: 413, price: 0.03 },
  { type: 'put', itm: false, strike: 414, price: 0.03 },
  { type: 'put', itm: false, strike: 415, price: 0.03 },
  { type: 'put', itm: false, strike: 416, price: 0.03 },
  { type: 'put', itm: false, strike: 417, price: 0.04 },
  { type: 'put', itm: false, strike: 418, price: 0.04 },
  { type: 'put', itm: false, strike: 419, price: 0.05 },
  { type: 'put', itm: false, strike: 420, price: 0.06 },
  { type: 'put', itm: false, strike: 421, price: 0.06 },
  { type: 'put', itm: false, strike: 422, price: 0.07 },
  { type: 'put', itm: false, strike: 423, price: 0.08 },
  { type: 'put', itm: false, strike: 424, price: 0.1 },
  { type: 'put', itm: false, strike: 425, price: 0.13 },
  { type: 'put', itm: false, strike: 426, price: 0.18 },
  { type: 'put', itm: false, strike: 427, price: 0.25 },
  { type: 'put', itm: false, strike: 428, price: 0.34 },
  { type: 'put', itm: false, strike: 429, price: 0.47 },
  { type: 'put', itm: false, strike: 430, price: 0.64 },
  { type: 'put', itm: false, strike: 431, price: 0.91 },
  { type: 'put', itm: false, strike: 432, price: 1.23 },
  { type: 'put', itm: true, strike: 433, price: 1.69 },
  { type: 'put', itm: true, strike: 434, price: 2.29 },
  { type: 'put', itm: true, strike: 435, price: 3.02 },
  { type: 'put', itm: true, strike: 436, price: 3.81 },
  { type: 'put', itm: true, strike: 437, price: 4.79 },
  { type: 'put', itm: true, strike: 438, price: 5.77 },
  { type: 'put', itm: true, strike: 439, price: 6.57 },
  { type: 'put', itm: true, strike: 440, price: 7.78 },
  { type: 'put', itm: true, strike: 441, price: 8.84 },
  { type: 'put', itm: true, strike: 442, price: 10.9 },
  { type: 'put', itm: true, strike: 443, price: 12.13 },
  { type: 'put', itm: true, strike: 444, price: 12.72 },
  { type: 'put', itm: true, strike: 445, price: 15.75 },
  { type: 'put', itm: true, strike: 446, price: 15 },
  { type: 'put', itm: true, strike: 447, price: 18.02 },
  { type: 'put', itm: true, strike: 448, price: 14.52 },
  { type: 'put', itm: true, strike: 449, price: 16.35 },
  { type: 'put', itm: true, strike: 450, price: 18.79 },
  { type: 'put', itm: true, strike: 451, price: 9.51 },
  { type: 'put', itm: true, strike: 452, price: 8.35 },
  { type: 'put', itm: true, strike: 453, price: 19.41 },
  { type: 'put', itm: true, strike: 454, price: 20.03 },
  { type: 'put', itm: true, strike: 455, price: 19.98 },
  { type: 'put', itm: true, strike: 456, price: 7.4 },
  { type: 'put', itm: true, strike: 457, price: 25.16 },
  { type: 'put', itm: true, strike: 459, price: 29.02 },
  { type: 'put', itm: true, strike: 460, price: 21.74 },
  { type: 'put', itm: true, strike: 461, price: 29.95 },
  { type: 'put', itm: true, strike: 465, price: 33.84 },
  { type: 'put', itm: true, strike: 487, price: 56.37 },
  { type: 'put', itm: true, strike: 515, price: 83.67 }
]
```


### todo

specify expiration
