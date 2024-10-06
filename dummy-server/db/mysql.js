/* eslint-disable no-undef */
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'

dotenv.config({ path: '.env.dummy-server' })

const isTestEnv = process.env.NODE_ENV === 'test'
const dbName = isTestEnv ? process.env.DB_NAME_TEST : process.env.DB_NAME

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: dbName,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
})

// Función para verificar la conexión
const checkConnection = async () => {
  try {
    const connection = await pool.getConnection()
    console.log('Database connection is active')
    connection.release()
  } catch (error) {
    console.error('Error checking database connection:', error)
  }
}

setInterval(checkConnection, 5 * 60 * 1000)
checkConnection()

// const insertUser = async () => {
//     try {
//         await pool.query('insert into `departures` (id, name, place, description) values (1, "cau", "sede central", "atencion usuario")');
//       } catch (err) {
//         console.log(err);
//       }
// }

// insertUser();

export const getAll = async (table) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM ${table}`)
    // console.log(rows[0])
    return rows
  } catch (err) {
    console.log(err)
  }
}

export const closePool = async () => {
  try {
    await pool.end()
    console.log('Database pool closed')
  } catch (error) {
    console.error('Error closing database pool:', error)
  }
}

// getAll('departures');

// try {
//     const [rows] = await pool.query('SELECT * FROM `departures`');
//     console.log(rows[0])
//     // Connection is automatically released when query resolves
//   } catch (err) {
//     console.log(err);
//   }

// pool.end();

// Create the connection to database
// const connection = await mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT
// })

// export const getAll = async (table) => {
//   try {
//     const [results, fields] = await connection.query(`SELECT * FROM ${table}`)
//     // console.log(results)
//     return results;
//     // console.log(fields)
//   } catch (err) {
//     console.log(err)
//   }
// }

export { pool, checkConnection }
