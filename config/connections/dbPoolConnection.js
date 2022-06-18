'use strict'

const config = require('../index')
const mysql = require('mysql2')
const { LogHandler } = require('../../handlers')

const PoolConnection = () => {
  try {
    const pool = mysql.createPool({
      connectionLimit: 100,
      host: config.mysql.host,
      port: config.mysql.port,
      user: config.mysql.user,
      password: config.mysql.password,
      database: config.mysql.database
    })

    pool.getConnection(function (err) {
      if (err) {
        LogHandler.error('>> PoolConnection getConnection Error', err)
      } else {
        LogHandler.info('>> PoolConnection Database Connection Success')
      }
    });
    return pool
  } catch (error) {
    LogHandler.error('>> PoolConnection Error', error)
  }
}

module.exports = PoolConnection
