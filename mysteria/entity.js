const rName = require('random-name');

let classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
let races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Gnome', 'Halfing', 'Kobold', 'Goblin', 'Treant', 'Fae', 'Lizardfolk', 'Dragonkin'];

const entity = () => {
    entityFirstName = rName.first();
    entityLastName = rName.last();
    entityClass = classes[Math.floor(Math.random() * classes.length)];
    entityRace = races[Math.floor(Math.random() * races.length)];
    entityCurrentLevel = 1;
    return {
        entityFirstName,
        entityLastName,
        entityClass,
        entityRace,
        entityCurrentLevel
    }
}

module.exports = entity;