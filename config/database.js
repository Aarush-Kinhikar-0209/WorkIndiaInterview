const { createPool } = require('mysql2')

const pool = createPool({
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
}).promise()

module.exports = pool