const helper = require('./helper.js');
const config = require('../conf/helper.conf.json');
const entity = require('./entity');
const entityLimit = config['entityLimit'];

module.exports.generateEntities = () => {
    helper.startElapsedTime();
    helper.logger.info('Beginning NPC generation process...');

    let entities = {};
    let id = 0;
    for (let x = 0; x < entityLimit; x++) {
        let e = entity.generateEntity();
        e.entityId = id++;
        entities[e.entityId] = e;
        helper.logger.info(`${e.type} Entity: ${e.firstName} ${e.lastName} has been generated! 🎊`);
    }
    helper.endElapsedTime();
    helper.logger.info('All entities have been generated!');
    return entities;
}

module.exports.rollDice = (dice) => {
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