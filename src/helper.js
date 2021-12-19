const { createLogger, format, transports } = require('winston'); 
const fs = require('fs');
const gen = require('random-seed');
const logLevels = {
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
    transports: [new transports.Console({})],
});

let startTime, endTime, rand;

const startElapsedTime = () => {
    startTime = new Date();
}

const endElapsedTime = () => {
    if (startTime != null) {
        endTime = new Date();
        let timeDiff = endTime - startTime; // in milliseconds
        timeDiff /= 1000;
        let seconds = timeDiff;
        return logger.info('Action completed in ', seconds, ' seconds.');
    }
}

const JSONFileToObj = path => JSON.parse(fs.readFileSync(path, 'utf8'));

// This takes in a normal .txt file, reads line-by-line.
const fileToArray = (path) => {
    let arr = [];
    const data = fs.readFileSync(path, 'utf8');
    data.split(/\r?\n/).forEach( line => {
        arr.push(line);
    });
    return arr;
}

// Need to initialize random seed in a global scope in server.js's init() to prevent
// reoccurring numbers.
const initRandom = (useGlobalSeed = true) => { 
    if (useGlobalSeed) { rand = gen.create(JSONFileToObj('../conf/helper.conf.json')['globalSeed']); } 
    else { rand = gen.create(); }
}

const genRandom = limit => rand(limit);

module.exports = {logger, initRandom, genRandom, startElapsedTime, endElapsedTime, fileToArray, JSONFileToObj};  