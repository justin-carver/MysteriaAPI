const fs = require('fs');
const gen = require('random-seed');

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
        return console.log(generateTimestamp(), 'Action completed in ', seconds, ' seconds.');
    }
}

const generateTimestamp = (brackets = true) => {
    let currentDate = new Date();
    if (brackets) {
        return timestamp = `? [${pad(currentDate.getHours(), 2)}:${pad(currentDate.getMinutes(), 2)}]:`;
    } else {
        return timestamp = `${pad(currentDate.getHours(), 2)}:${pad(currentDate.getMinutes(), 2)}`;
    }
}

// For timestamp padding
const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
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

module.exports = {initRandom, genRandom, generateTimestamp, pad, startElapsedTime, endElapsedTime, fileToArray, JSONFileToObj};  