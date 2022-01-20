const { createLogger, format, transports } = require('winston'); 
const config = require('../conf/helper.conf.json');
const fs = require('fs');
const gen = require('random-seed');

// TODO: Find a way to pass in format.prettyPrint() into format.combine() dynamically.
// TODO: Logger will need to produce output asynchronously. (https://nodejs.org/api/async_hooks.html#async_hooks_printing_in_asynchooks_callbacks)

const logLevels = {
    headless : -1, // May increase compute time at cost of no output logs.
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};
const logger = createLogger({
    levels : logLevels,
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console({ level : config['server']['logLevel'] })],
});

let startTime, endTime, rand = () => {}

const startElapsedTime = () => {
    startTime = new Date();
}

const endElapsedTime = () => {
    if (startTime != null) {
        endTime = new Date();
        let timeDiff = endTime - startTime; // in milliseconds
        timeDiff /= 1000;
        let seconds = timeDiff;
        return logger.info(`Action completed in ${seconds} seconds.`);
    }
}

// Need to initialize random seed in a global scope in server.js's init() to prevent
// reoccurring numbers.
const initRandom = (useGlobalSeed = true) => { 
    if (useGlobalSeed) { rand = gen.create(config['globalSeed']); } 
    else { rand = gen.create(); }
}

const genRandom = limit => rand(limit);

module.exports = {logger, initRandom, genRandom, startElapsedTime, endElapsedTime};  