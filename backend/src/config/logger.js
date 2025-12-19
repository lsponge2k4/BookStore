import winston from 'winston';

const logger = winston.createLogger({
    level: 'http',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.printf(({ timestamp, level, message }) => {
                    return `${timestamp} [${level}]: ${message}`;
                })
            )
        })
        // ,
        // new winston.transports.File({
        //     filename: 'src/logs/error.log', level: 'error', maxsize: 5 * 1024 * 1024, maxFiles: 5, tailable: true
        //     , format: winston.format.combine(
        //         winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        //         winston.format.json()
        //     )
        // }),
        // new winston.transports.File({
        //     filename: 'src/logs/access.log', maxsize: 5 * 1024 * 1024, maxFiles: 5, tailable: true, level: 'http',
        //     format: winston.format.combine(
        //         winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        //         winston.format.json()
        //     )
        // }),
        // new winston.transports.File({
        //     filename: 'src/logs/app.log', maxsize: 5 * 1024 * 1024, maxFiles: 5, tailable: true, level: 'http',
        //     format: winston.format((info) => {
        //         return info.level === 'http' ? info : false
        //     })()
        // })
    ]
})

export default logger;