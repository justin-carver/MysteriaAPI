const entity = require('./entity');
const helper = require('./helper');
const world = require('./world');
const e = require('express');
const version = '0.0.1';

// Most of this should get moved to a configuation file.
const entityLimit = 100;
let entities = {};

const generateNPCs = () => {
    helper.startElapsedTime();
    console.log(helper.generateTimestamp(), 'Beginning entity generation process...');
    let id = 0;
    for (let x = 0; x < entityLimit; x++) {
        let e = entity();
        // Give the entity a unique ID.
        e.entityId = id++;
        entities[e.entityId] = e;
        console.log(helper.generateTimestamp(), `${e.entityType} Entity: ${e.entityFirstName} ${e.entityLastName} has been generated...`);
    }
    helper.endElapsedTime();
    console.log(helper.generateTimestamp(), 'All entities have been generated!');
}

const init = () => {
    console.log(helper.generateTimestamp(), 'Initializing server...');
    generateNPCs();
    world.generateWorld();
    console.log(helper.generateTimestamp(), `MysteriaAPI Server version ${version} initialized!`);
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
//   console.log(helper.generateTimestamp(), `Server listening at http://localhost:${port}`)
// })