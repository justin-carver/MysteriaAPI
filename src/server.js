// TODO: Implement entity states.
// TODO: Once states are implemented, introduce server tick sytstem.

const entity = require('./entity');
const helper = require('./helper');
const world = require('./world');
const e = require('express');
const version = '0.0.1';
const config = helper.JSONFileToObj('../conf/helper.conf.json');
const entityLimit = config['entityLimit'];
let entities = {};

// TODO: This should get moved into dungeon-master.js or entity.js
const generateNPCs = () => {
    helper.startElapsedTime();
    helper.logger.info('Beginning NPC generation process...');
    let id = 0;
    for (let x = 0; x < entityLimit; x++) {
        let e = entity();
        // Give the entity a unique ID.
        e.entityId = id++;
        entities[e.entityId] = e;
        helper.logger.info(`${e.entityType} Entity: ${e.entityFirstName} ${e.entityLastName} has been generated! 🎊`);
    }
    helper.endElapsedTime();
    helper.logger.info('All entities have been generated!');
}

const init = () => {
    helper.initRandom();
    helper.logger.info('Initializing server...');
    // ------
    generateNPCs();
    world.generateWorld();
    // ------
    helper.logger.info(`MysteriaAPI Server version ${version} initialized!`);
}

// Server initiatlization begins here.
init();

// Express is currently installed,
// uncomment this to begin the server.

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/entities', (req, res) => {
//   res.send(entities)
// })

// app.listen(port, () => {
//   helper.logger.info(`Server listening at http://localhost:${port}`)
// })