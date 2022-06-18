'use strict'
const LogHandler = require('./logHandler')

/**
 *
 * @param {*} queryString
 * @param {*} parameters []
 * @returns
 */
const PoolQueryHandler = async (queryString, parameters = []) => {
    try {
        const promisePool = global.poolCon.promise()
        // eslint-disable-next-line no-unused-vars
        const [rows, fields] = await promisePool.query(
            queryString,
            parameters
        )

        return rows
    } catch (error) {
        LogHandler.error('PoolQueryHandler Handler', error)
        return []
    }
}

module.exports = PoolQueryHandler
