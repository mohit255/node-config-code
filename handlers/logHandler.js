const appRoot = require('app-root-path')
const DailyRotateFile = require('winston-daily-rotate-file')
const { format, createLogger, transports } = require('winston')
const { timestamp, combine, errors, json } = format

const timezoned = () => {
    return new Date().toLocaleString('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour12: false
    })
}

function logHandler() {
    return createLogger({
        format: combine(timestamp({ format: timezoned }), errors({ stack: true }), json()),
        // format: combine(timestamp(), errors({ stack: true }), json()),
        // defaultMeta: { service: 'user-service' },
        transports: [
            new transports.Console({
                level: 'debug',
                colorize: true,
                timestamp: true,
                format: format.simple()
            }),
            new DailyRotateFile({
                filename: `${appRoot}/logs/app.log`,
                level: 'debug',
                prepend: true,
                datePattern: 'YYYY-MM-DD',
                maxFiles: '15d',
                timestamp: true
            })
        ]
    })
}

const LogHandler = logHandler()

module.exports = LogHandler
