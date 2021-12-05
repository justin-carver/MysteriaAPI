const rName = require('random-name');

let classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
let races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Gnome', 'Halfing', 'Kobold', 'Goblin', 'Treant', 'Fae', 'Lizardfolk', 'Dragonkin'];
let alignment = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'];
let flags = [];

const entity = () => {
    entityFirstName = rName.first();
    entityLastName = rName.last();
    entityClass = classes[Math.floor(Math.random() * classes.length)];
    entityRace = races[Math.floor(Math.random() * races.length)];
    entityCurrentLevel = 1;
    entityAlignment = alignment[Math.floor(Math.random() * alignment.length)];
    entityHitPoints = 100; // Change later
    entityFlags = ['NPC', 'KILLABLE', 'NOOB'];
    const beginQuest = () => {
        console.log('Do the roar.');
        return this;
    }
    return {
        beginQuest,
        entityFirstName,
        entityLastName,
        entityClass,
        entityRace,
        entityAlignment,
        entityCurrentLevel,
        entityFlags,
        entityHitPoints
    }
}

module.exports = entity;