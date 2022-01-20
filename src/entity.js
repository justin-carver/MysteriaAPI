const helper = require('./helper.js');
const rName = require('random-name');
const dm = require('./dungeon-master');
const entitySkills = require('../data/skills.json');

// TODO: Move races to data/races.json, fill out more appropriate information.
const classes = require('../data/classes.json');
const races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Gnome', 'Halfing', 'Kobold', 'Goblin', 'Treant', 'Fae', 'Lizardfolk', 'Dragonkin'];
const alignments = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'];

const pickClass = (entityStats) => {
    // Compare entityStats' two highest attributes to the preferred primaryStats of each class in data/classes.json
    let possibleClasses = [];
    for (let x in classes) {
        let preferred = classes[x]['primaryStats'];
        let current = [entityStats[0][0], entityStats[1][0]];
        if (JSON.stringify(preferred) === JSON.stringify(current)) {
            possibleClasses.push(classes[x]['className']);
        }
    }
    if (possibleClasses.length <= 0) {
        // If there are no matching preferred classes, gather all classes with the same matching highest primary attribute
        // then randomly choose another matching class, make sure the primary attribute is NOT constitution.
        let randomPrefClasses = [];
        for (let x in classes) {
            // explicit JSON.stringfy type-casting for accurate comparisons.
            if (JSON.stringify(entityStats[0][0]) !== JSON.stringify('Constitution')) {
                if (JSON.stringify(classes[x]['primaryStats'][0]) === JSON.stringify(entityStats[0][0])) {
                    randomPrefClasses.push(classes[x]['className']);
                }
            } else {
                // Check the second highest attribute instead if the first one is 'Constitution'.
                if (JSON.stringify(classes[x]['primaryStats'][0]) === JSON.stringify(entityStats[1][0])) {
                    randomPrefClasses.push(classes[x]['className']);
                }
            }
        }
        return randomPrefClasses[helper.genRandom(randomPrefClasses.length)];
    } else {
        return possibleClasses[helper.genRandom(possibleClasses.length)];
    }
}

/**
 * Returns an array of key-value pairs of attribute arrays, sorted in descending order.
 * @returns { [[string, number], ...] }
 */
const entityStatsDescending = (stats) => {
    let arr = [];
    for (let stat in stats) {
        arr.push([stat, stats[stat]]);
    }
    return arr.sort((a, b) => b[1] - a[1]);
};



const entityInit = (firstName, lastName, className, race, alignment, stats, flags) => {
    helper.logger.debug(`Generating ${firstName} ${lastName}, a ${className} ${race} who is ${alignment}...`);
    helper.logger.debug(`Attributes for ${firstName} ${lastName}`, stats);
    helper.logger.debug(`Flags for ${firstName} ${lastName}`, flags);
}


const generateEntity = () => {

    const baseStats = {
        'Strength' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Dexterity' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Constitution' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Intelligence': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Wisdom' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Charisma': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b)
    }
    let stats = baseStats;

    const firstName = rName.first();
    const lastName = rName.last();
    const className = pickClass(entityStatsDescending(stats));
    const hitDie = classes[className]['hitDie'];
    const race = races[Math.floor(helper.genRandom(races.length))];
    const type = 'NPC';
    const alignment = alignments[Math.floor(helper.genRandom(alignments.length))];
    
    let flags = ['HUMAN', 'FLESHY', 'SOUL'];
    let skills = entitySkills;
    let initiative = 0;
    let speed = 30;
    let currentExperience = 0;
    let experienceToNextLevel = 100;
    let hasInspiration = false;
    let hitPoints = 100;
    let currentLevel = 1;

    entityInit(firstName, lastName, className, race, alignment, stats, flags);

    return {
        firstName, lastName, className, hitDie, race, type, alignment,
        stats, flags, skills, initiative, speed, currentExperience, experienceToNextLevel,
        hasInspiration, hitPoints, currentLevel
    }
}

module.exports = {generateEntity};