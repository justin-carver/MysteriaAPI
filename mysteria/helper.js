const fs = require('fs');

let startTime, endTime;

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

// This takes in a normal .txt file
const fileToArray = (path) => {
    let arr = [];
    const data = fs.readFileSync(path, 'utf8');
    data.split(/\r?\n/).forEach( line => {
        arr.pop(line);
    });
    return arr;
}

// This is specific to JSON
const JSONFileToObj = path => JSON.parse(fs.readFileSync(path, 'utf8'));

module.exports = {generateTimestamp, pad, startElapsedTime, endElapsedTime, fileToArray, JSONFileToObj};  