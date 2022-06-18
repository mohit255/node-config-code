
const express = require('express')
const cors = require('cors')
const app = express()
const PoolConnection = require('./config/connections/dbPoolConnection')
const config = require('./config')
const { LogHandler } = require('./handlers')
const path = require('path')
const fs = require("fs");

const PORT = config.app.port

try {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static(path.join(__dirname, 'assets')))

    // set the view engine to ejs
    app.set('view engine', 'ejs');

    app.set('views', 'views');

    // get true IP address if proxy is active
    app.set('trust proxy', true)

    global.poolCon = PoolConnection()

    // get Routes
    app.use(require('./routes/homeRoutes'));

    app.listen(PORT, () => {
        console.log(`Server listening at ${PORT}`)
        LogHandler.info('>> Server has stated successfully')
    })

}
catch (error) {
    LogHandler.error('>> Server Stating Error', error)
}

