const helper = require('./helper.js');
const rName = require('random-name');
const dm = require('./dungeon-master');

let classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
let races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Gnome', 'Halfing', 'Kobold', 'Goblin', 'Treant', 'Fae', 'Lizardfolk', 'Dragonkin'];
let alignment = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'];

const entity = () => {

    // Entity attributes
    entityFirstName = rName.first();
    entityLastName = rName.last();
    entityClass = classes[Math.floor(Math.random() * classes.length)];
    entityRace = races[Math.floor(Math.random() * races.length)];
    entityCurrentLevel = 1;
    entityType = 'NPC';
    entityAlignment = alignment[Math.floor(Math.random() * alignment.length)];
    entityHitPoints = 100; // Change later
    entityFlags = ['KILLABLE', 'NOOB'];
    // TODO: Convert to object, include savings throws, skillString, etc.
    entityStats = {
        'Strength': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Dexterity' : dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Constitution': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Intelligence': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Wisdom': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b),
        'Charisma': dm.rollDice('4d6').rollsLowestRemoved.reduce((a, b) => a + b)
    },
    entitySkills = {
        'Acrobatics': {
            'Name': 'Acrobatics',
            'Ability': 'Dexterity',
            'Modifier': 'Dexterity Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Animal Handling': {
            'Name': 'Animal Handling',
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },  
        'Arcana': {
            'Name': 'Arcana',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Athletics': {
            'Name': 'Athletics',
            'Ability': 'Strength',
            'Modifier': 'Strength Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Deception': {  
            'Name': 'Deception',
            'Ability': 'Charisma',
            'Modifier': 'Charisma Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'History': {
            'Name': 'History',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Insight': {
            'Name': 'Insight',  
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Intimidation': {
            'Name': 'Intimidation',
            'Ability': 'Charisma',
            'Modifier': 'Charisma Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },  
        'Investigation': {
            'Name': 'Investigation',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Medicine': {
            'Name': 'Medicine',
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Nature': {
            'Name': 'Nature',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Perception': {
            'Name': 'Perception',
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'    
        },
        'Performance': {
            'Name': 'Performance',
            'Ability': 'Charisma',
            'Modifier': 'Charisma Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Persuasion': {
            'Name': 'Persuasion',
            'Ability': 'Charisma',
            'Modifier': 'Charisma Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Religion': {
            'Name': 'Religion',
            'Ability': 'Intelligence',
            'Modifier': 'Intelligence Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Sleight of Hand': {
            'Name': 'Sleight of Hand',
            'Ability': 'Dexterity',
            'Modifier': 'Dexterity Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Stealth': {
            'Name': 'Stealth',
            'Ability': 'Dexterity',
            'Modifier': 'Dexterity Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
            'Misc': 'Misc',
            'Total': 'Total'
        },
        'Survival': {
            'Name': 'Survival',
            'Ability': 'Wisdom',
            'Modifier': 'Wisdom Modifier',
            'Proficiency': 'Proficiency',
            'Ranks': 'Ranks',
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

    const generateEntityClass = (stats) => {
        if (stats['Strength'] >= 18) {
            entityClass = 'Barbarian';
        }
    }

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