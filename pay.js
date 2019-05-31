const pay = require('donna-bot/services/sii/f29')
const db = require('monk')(process.env.MONGODB_URI)
const telegram = require('telegram-bot-api')

const logs = db.get('logs')

const bot = new telegram({
  token: process.env.BOT_TOKEN
})

async function run () {
  const { PASSWORD, RUT } = process.env

  if (!PASSWORD) {
    return console.error('PASSWORD is missing from ENV variables')
  }

  if (!RUT) {
    return console.error('RUT is missing from ENV variables')
  }

  const now = new Date()
  const currentMonth = { month: now.getMonth() + 1, year: now.getFullYear() }

  const log = await logs.findOne(currentMonth)

  if (log) {
    console.info('Already run for this month')
    return
  }

  try {
    await pay(RUT, PASSWORD)
    console.info('Success')
    bot.sendMessage({
      chat_id: process.env.BOT_CHAT_ID,
      text: 'Listo! Tus impuestos del SII están pagados 🎉🎉🎉🎉'
    })
    await logs.insert(currentMonth)
  } catch (e) {
    console.error('Something went wrong')
    throw e
  }
}

run()
  .then(() => console.log('Program finished successfully'))
  .catch(e => console.error('There was an error', e))
  .then(() => db.close())
