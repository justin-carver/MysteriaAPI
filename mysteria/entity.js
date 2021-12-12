const helper = require('./helper.js');
const rName = require('random-name');
const dm = require('./dungeon-master');

let classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
let races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Gnome', 'Halfing', 'Kobold', 'Goblin', 'Treant', 'Fae', 'Lizardfolk', 'Dragonkin'];
let alignment = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'];

const entity = () => {

    // TODO: Fix issues with class generation not giving appropriate class based on stats.
    const generateEntityClass = (stats) => {
        if (/* entityType === 'NPC' */ true) { // Resolve this later
            if (stats['Strength'] >= stats['Constitution']) {
                if (stats['Constitution'] >= stats['Intelligence']) {
                    return entityClass = 'Barbarian';
                } else {
                    return entityClass = 'Fighter';
                } 
            } else if (stats['Dexterity'] >= stats['Wisdom']) {
                if (stats['Wisdom'] >= stats['Intelligence']) {
                    return entityClass = 'Monk';
                } else if (stats['Wisdom'] >= stats['Charisma']) {
                    return entityClass = 'Ranger';
                } else {
                    return entityClass = 'Rogue';
                }
            } else if (stats['Intelligence'] >= stats['Wisdom']) {
                if (stats['Intelligence'] >= stats['Strength']) {
                    return entityClass = 'Wizard';
                } else {
                    return entityClass = 'Sorcerer';
                }
            } else if (stats['Wisdom'] >= stats['Intelligence']) {
                if (stats['Wisdom'] >= stats['Constitution']) {
                    return entityClass = 'Druid';
                } else {
                    return entityClass = 'Cleric';
                }
            } else if (stats['Charisma'] >= stats['Constitution']) {
                if (stats['Charisma'] >= stats['Intelligence']) {
                    return entityClass = 'Warlock';
                } else if (stats['Charisma'] >= stats['Wisdom']) {
                    return entityClass = 'Sorcerer';
                } else {
                    return entityClass = 'Bard';
                }
            } else if (stats['Strength'] >= stats['Dexterity']) {
                if ( stats['Strength'] >= stats['Charisma']) {
                    return entityClass = 'Paladin';
                } else {
                    return entityClass = 'Fighter';
                }
            } else {
                // Assign random class
                return entityClass = classes[Math.floor(Math.random() * classes.length)];
            }
        }
    }

    // Entity attributes
    // TODO: Convert to object, include savings throws, skillString, etc.
    entityStats = {
        'Strength': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Dexterity' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Constitution': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Intelligence': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Wisdom': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Charisma': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b)
    }
    entityFirstName = rName.first();
    entityLastName = rName.last();
    entityClass = generateEntityClass(entityStats);
    entityRace = races[Math.floor(Math.random() * races.length)];
    entityCurrentLevel = 1;
    entityType = 'NPC';
    entityAlignment = alignment[Math.floor(Math.random() * alignment.length)];
    entityHitPoints = 100; // Change later
    entityFlags = ['HUMAN', 'FLESHY', 'SOUL']; // Can be configured later
    entitySkills = {
        'Acrobatics': {
            'Name': 'Acrobatics',
            'Ability': 'Dexterity',
            'Modifier': 'Dexterity Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Animal Handling': {
            'Name': 'Animal Handling',
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },  
        'Arcana': {
            'Name': 'Arcana',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Athletics': {
            'Name': 'Athletics',
            'Ability': 'Strength',
            'Modifier': 'Strength Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Deception': {  
            'Name': 'Deception',
            'Ability': 'Charisma',
            'Modifier': 'Charisma Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'History': {
            'Name': 'History',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Insight': {
            'Name': 'Insight',  
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Intimidation': {
            'Name': 'Intimidation',
            'Ability': 'Charisma',
            'Modifier': 'Charisma Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },  
        'Investigation': {
            'Name': 'Investigation',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Medicine': {
            'Name': 'Medicine',
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Nature': {
            'Name': 'Nature',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Perception': {
            'Name': 'Perception',
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'    
        },
        'Performance': {
            'Name': 'Performance',
            'Ability': 'Charisma',
            'Modifier': 'Charisma Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Persuasion': {
            'Name': 'Persuasion',
            'Ability': 'Charisma',
            'Modifier': 'Charisma Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Religion': {
            'Name': 'Religion',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Sleight of Hand': {
            'Name': 'Sleight of Hand',
            'Ability': 'Dexterity',
            'Modifier': 'Dexterity Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Stealth': {
            'Name': 'Stealth',
            'Ability': 'Dexterity',
            'Modifier': 'Dexterity Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Survival': {
            'Name': 'Survival',
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Misc': 'Misc',
            'Total': 'Total'
        }
    }

    const entityInit = (verbose = false) => {
        if (verbose) {
            console.log(helper.generateTimestamp(), `Generating ${entityFirstName} ${entityLastName}, a ${entityClass} ${entityRace} who is ${entityAlignment}`);
            console.log(`${entityFirstName} ${entityLastName} stats:`, entityStats);
            console.log(`${entityFirstName} ${entityLastName} flags:`, entityFlags);
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
        entitySkills,
        entityFlags,
        entityHitPoints
    }
}

module.exports = entity;