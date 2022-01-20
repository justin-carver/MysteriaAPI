
// const yargs = require('yargs'); // TODO: Implement yargs at some point.
const helper = require('./helper');
const world = require('./world');
const dm = require('./dungeon-master');
const e = require('express');

const config = require('../conf/helper.conf.json');
const version = config['server']['version'];

// TODO: Implement entity states.
// TODO: Once states are implemented, introduce server tick sytstem.
let entities = {};

const init = () => {
    helper.initRandom();
    helper.logger.info('Initializing server...');
    // ------ Core Init
    entities = dm.generateEntities();
    world.generateWorld();
    // ------ End Core Init
    helper.logger.info(`MysteriaAPI server version ${version} initialized!`);
}

init();

const express = require('express')
const app = express()
const port = 3000

app.get('/entities', (req, res) => {
    res.send(entities)
})

app.listen(port, () => {
    helper.logger.info(`Server listening at http://localhost:${port}`)
})