const winston = require('winston');
const ENV = process.env.NODE_ENV;

// для пущей гибкости

const getLogger = (module) => {
  const path = module.filename.split('/').slice(-2).join('/');

  const logger = new (winston.Logger)({ 
    transports: [
      new (winston.transports.Console)({
        colorize: true,
        level: (ENV == 'development') ? 'debug' : 'error',
        label: path
      })
    ] 
  });

  return logger;
}

module.exports = getLogger;
