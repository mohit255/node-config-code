'use strict'

require('dotenv').config()

module.exports = {
  app: {
    port: process.env.PORT || 3000
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    messageTimeout: 10000
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DB || '',
    timeout: 28800 // In seconds
  }
}
