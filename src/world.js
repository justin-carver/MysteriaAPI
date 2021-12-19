const helper = require('./helper');

const world = [];

let provinceNames = helper.JSONFileToObj('../data/province.json')['generators']['prefix'];

// TODO: Rewrite province generation using data/province.json
const province = () => {
    const generateLandsize = () => { return Math.floor(helper.genRandom(10)) }
    cords = {
        x : 0,
        y : 0
    };
    provinceName = provinceNames[Math.floor(helper.genRandom(provinceNames.length))];
    districtCount = generateLandsize();
    return {
        provinceName,
        districtCount
    }
}

const generateWorld = () => {
    let provinceSize = 10;
    helper.logger.info('Generating world with default parameters...');
    for (let x = 0; x < provinceSize; x++) {
        for (let y = 0; y < provinceSize; y++) {
            let p = province();
            p.cords = {x , y};
            world.push(p);
        }
    }
    helper.logger.info(world);
}

module.exports = { generateWorld } 