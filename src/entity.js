const helper = require('./helper.js');
const rName = require('random-name');
const dm = require('./dungeon-master');

// TODO: Fix issues with class generation not giving appropriate class based on stats.
// TODO: Extend this function to generate information for creatures and monsters.
const entity = () => {

    // TODO: Move races to data/races.json, fill out more appropriate information.
    // TODO: Convert to consts.
    let classes = helper.JSONFileToObj('../data/classes.json');
    let races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Gnome', 'Halfing', 'Kobold', 'Goblin', 'Treant', 'Fae', 'Lizardfolk', 'Dragonkin'];
    let alignment = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'];

    const generateEntityClass = (entityStats) => {
        // Compare entityStats with
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
            // then randomly choose another matching class, then make sure the primary attribute is NOT constitution.
            let randomPrefClasses = [];
            for (let x in classes) {
                // explicit JSON.stringfy type-casting for accurate comparisons.
                if (JSON.stringify(entityStats[0][0]) !== JSON.stringify('Constitution')) {
                    if (JSON.stringify(classes[x]['primaryStats'][0]) === JSON.stringify(entityStats[0][0])) {
                        randomPrefClasses.push(classes[x]['className']);
                    }
                } else {
                    // Check the second highest attribute instead if the first one is Constitution
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

    // TODO: Include savings throws, skillString, anything relevant to common entity (non-NPC specific)
    entityStats = {
        'Strength' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Dexterity' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Constitution' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Intelligence': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Wisdom' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Charisma': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b)
    }
    /**
     * Returns an array of key-value pairs of attribute arrays, sorted in descending order.
     * @returns { [[string, number], ...] }
     */
    entityStatsDescending = () => {
        let arr = [];
        for (let stat in entityStats) {
            arr.push([stat, entityStats[stat]]);
        }
        return arr.sort((a, b) => b[1] - a[1]);
    };

    // TODO: rName is being generated with 'random-name', which does not use 'random-seed'. Fix to resolve unique names.
    entityFirstName = rName.first();
    entityLastName = rName.last();
    entityClass = generateEntityClass(entityStatsDescending()); // Needs attributes sorted in descending order.
    entityRace = races[Math.floor(helper.genRandom(races.length))];
    entityCurrentLevel = 1;
    entityType = 'NPC';
    entityAlignment = alignment[Math.floor(helper.genRandom(alignment.length))];
    entityHitPoints = 100; // Change later
    entityFlags = ['HUMAN', 'FLESHY', 'SOUL']; // Default
    entitySkills = helper.JSONFileToObj('../data/skills.json');

    // TODO: Uncomment these before release.
    const entityInit = (verbose = false) => {
        if (verbose) {
            helper.logger.info(`Generating ${entityFirstName} ${entityLastName}, a ${entityClass} ${entityRace} who is ${entityAlignment}...`);
            helper.logger.info(`Attributes for ${entityFirstName} ${entityLastName}`, entityStats);
            helper.logger.info(`Flags for ${entityFirstName} ${entityLastName}`, entityFlags);
        }
    }

    entityInit(true);

    return {
        entityInit,
        entityType,
        entityFirstName,
        entityLastName,
        entityClass,
        entityRace,
        entityAlignment,
        entityCurrentLevel,
        entityStats,
        entityStatsDescending,
        entitySkills,
        entityFlags,
        entityHitPoints
    }
}

module.exports = entity;