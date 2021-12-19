// TODO: Implement [`npm install random-seed`](https://www.npmjs.com/package/random-seed) for all randomness, add seeding.

const helper = require('./helper');

const rollDice = (dice) => {
    dice += '';
    const diceArray = dice.split('d');
    const diceCount = diceArray[0];
    const diceSides = diceArray[1];
    let diceTotal = 0;
    let rolls = [];
    for (let i = 0; i < diceCount; i++) {
        let roll = Math.floor(helper.genRandom(diceSides)) + 1;
        diceTotal += roll;
        rolls.push(roll);
    }
    return {
        sum: diceTotal,
        rolls: rolls.sort().reverse(),
        rollsLowestRemoved : rolls.slice(0, -1),
        rollsHighestRemoved : rolls.shift()
    };
}

module.exports = {rollDice};