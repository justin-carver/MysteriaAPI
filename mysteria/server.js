const entity = require('./entity');
const helper = require('./helper');
const world = require('./world');

const entityLimit = 100;
let entities = [];

const generateNPCs = () => {
    helper.startElapsedTime();
    console.log(helper.generateTimestamp(), 'Beginning entity generation process...');
    let id = 0;
    for (let x = 0; x < entityLimit; x++) {
        let e = entity();

        // Server ONLY object properties.
        e.entityId = id++;

        entities.push(e);
        console.log(`Generated entity ${e.entityFirstName} ${e.entityLastName}...`);
    }
    helper.endElapsedTime();
    console.log(entities[4]);
}

const init = () => {
    generateNPCs();
    world.generateWorld();
}


// Server initiatlization begins here.
init();



// Express is currently installed,
// uncomment this to begin the server.

const express = require('express')
const app = express()
const port = 3000

app.get('/entities', (req, res) => {
  res.send(entities)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})