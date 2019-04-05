const pay = require('donna-bot/services/sii/f29')

function run () {
  const { PASSWORD, RUT } = process.env

  if (!PASSWORD) {
    return console.error('PASSWORD is missing from ENV variables')
  }

  if (!RUT) {
    return console.error('RUT is missing from ENV variables')
  }

  console.info('Running pay SII function')
  pay(RUT, PASSWORD)
}

run()
