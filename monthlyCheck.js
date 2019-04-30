const monk = require('monk')

function collection (db) {
  return db.get('monthly_checks')
}

async function exists (date) {
  const db = monk(process.env.MONGODB_URI)
  let exists = false
  try {
    const doc = await collection(db).findOne(date)
    exists = Boolean(doc)
  } catch (e) {
    console.error(e)
  } finally {
    return exists
  }
}

async function insert (date) {
  const db = monk(process.env.MONGODB_URI)
  return collection(db).insert(date)
}

module.exports = {
  exists,
  insert
}
