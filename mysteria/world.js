const helper = require('./helper');

let provinceNames = ['Kingdom of Swalthallow']; // This needs to be either static or markov chain.

// TODO: Create a coordinate system.
const province = () => {
    const generateLandsize = () => { return Math.floor(Math.random() * 10) }
    cords = [,];
    provinceName = provinceNames[0];
    districtCount = generateLandsize();
    return {
        provinceName,
        districtCount
    }
}

let world = [,]; // global world

const generateWorld = () => {
    console.log(helper.generateTimestamp(), 'Generating world with default parameters...');
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            let p = province();
            p.cords = [x][y];
            world.push(p);
        }
    }
    console.log(world);
}

module.exports = { generateWorld } 