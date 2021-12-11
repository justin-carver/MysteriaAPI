const helper = require('./helper');

const world = [];
// Generate more province names
let provinceNames = ['Kingdom of Swalthallow'];

const province = () => {
    const generateLandsize = () => { return Math.floor(Math.random() * 10) }
    cords = {
        x : 0,
        y : 0
    };
    provinceName = provinceNames[0];
    districtCount = generateLandsize();
    return {
        provinceName,
        districtCount
    }
}

const generateWorld = () => {
    let provinceSize = 10;
    console.log(helper.generateTimestamp(), 'Generating world with default parameters...');
    for (let x = 0; x < provinceSize; x++) {
        for (let y = 0; y < provinceSize; y++) {
            let p = province();
            p.cords = {x , y};
            world.push(p);
        }
    }
    // console.log(world);
}

module.exports = { generateWorld } 