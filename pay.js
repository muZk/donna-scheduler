const pay = require('donna-bot/services/sii/f29')

const monthlyCheck = require('./monthlyCheck')

function logSuccess () {
  console.info('Success!!')
}

function logError (e) {
  console.log('Something went wrong')
  console.error(e)
}

function run () {
  const { PASSWORD, RUT } = process.env

  if (!PASSWORD) {
    return console.error('PASSWORD is missing from ENV variables')
  }

  if (!RUT) {
    return console.error('RUT is missing from ENV variables')
  }

  console.info('Running pay SII function')

  const today = new Date()
  const month = today.getMonth()
  const year = today.getFullYear()

  pay(RUT, PASSWORD)
    .then(() => console.log('Success!') && process.exit())
    .catch(e => logError(e) && process.exit(1))

  /* return monthlyCheck
    .exists({ month, year })
    .then(exists => {
      if (exists) {
        console.info(`Already called for month = ${month} and year = ${year}`)
      } else {
        return pay(RUT, PASSWORD).then(
          () => logSuccess() && monthlyCheck.insert({ month, year })
        )
      }
    })
    .then(() => process.exit())
    .catch(e => logError(e) && process.exit(1)) */
}

run()
