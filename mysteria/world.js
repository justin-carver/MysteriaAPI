const helper = require('./helper');

let world = {}; // global world

const generateWorld = () => {
    console.log(helper.generateTimestamp(), 'Generating world with default parameters...');
}

module.exports = { generateWorld } 