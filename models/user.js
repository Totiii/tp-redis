// const db = require('sqlite')
const Redis = require('ioredis')
const redis = new Redis()

async function get(userId) {
  const val = await redis.get(userId)
  console.log(val)
}

async function count() {
  const val = await redis.get(users)
  console.log(val)
}

async function getAll() {
  const val = await redis.get(users)
  console.log(val)
}

async function insert(params) {
  const val = await redis.set(users, params.pseudo, params.firstname, params.lastname, params.email, params.password)
  console.log(val)
}

async function update(userId, params) {
  const val = await redis.Zadd(userId, params.firstname, params.lastname, params.email, params.pseudo, params.password)
  console.log(val)
}

async function remove(userId) {
  const val = await redis.del(userId)
  console.log(val)
}

/*
module.exports = {
  get: (userId) => {
    return db.get('SELECT rowid, * FROM users WHERE rowid = ?', userId) // Get userId
  },

  count: () => {
    return db.get('SELECT COUNT(*) as count FROM users') // Get Users
  },

  getAll: (limit, offset) => {
    return db.all('SELECT rowid, * FROM users LIMIT ? OFFSET ?', limit, offset)
  },

  insert: (params) => {
    return db.run(
      'INSERT INTO users (pseudo, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)',  // Set users params.pseudo, params.firstname, params.lastname,  params.email,  params.password
      params.pseudo,
      params.firstname,
      params.lastname,
      params.email,
      params.password
    )
  },

  update: (userId, params) => {
    const possibleKeys = ['firstname', 'lastname', 'email', 'pseudo', 'password'] // Zadd userId firstname, lastname, email, pseudo, password

    let dbArgs = []
    let queryArgs = []
    for (key in params) {
      if (-1 !== possibleKeys.indexOf(key)) {
        queryArgs.push(`${key} = ?`)
        dbArgs.push(params[key])
      }
    }

    if (!queryArgs.length) {
      let err = new Error('Bad Request')
      err.status = 400
      return Promise.reject(err)
    }

    dbArgs.push(userId)
    dbArgs.unshift('UPDATE users SET ' + queryArgs.join(', ') + ' WHERE rowid = ?')

    return db.run.apply(db, dbArgs).then((stmt) => {
      if (stmt.changes === 0){
        let err = new Error('Not found')
        err.status = 404
        return Promise.reject(err)
      }

      return stmt
    })
  },

  remove: (userId) => {
    return db.run('DELETE FROM users WHERE rowid = ?', userId) // Del userId
  }

}
*/