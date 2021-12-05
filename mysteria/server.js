const entity = require('./entity.js');

const entityLimit = 10;
let entities = [];

// For timestamp padding
const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

const generateTimestamp = (brackets = true) => {
    let currentDate = new Date();
    if (brackets) {
        return timestamp = `? [${pad(currentDate.getHours(), 2)}:${pad(currentDate.getMinutes(), 2)}]:`;
    } else {
        return timestamp = `${pad(currentDate.getHours(), 2)}:${pad(currentDate.getMinutes(), 2)}`;
    }
}

const generateNPCs = () => {
    console.log(generateTimestamp(), 'Beginning entity generation process...');
    let id = 0;
    for (let x = 0; x < entityLimit; x++) {
        let e = entity();

        // Server ONLY object properties.
        e.entityId = id++;

        entities.push(e);
        console.log(`Generated entity ${e.entityFirstName} ${e.entityLastName}...`);
    }
    console.log(entities[4]);
    entities[0].speak();
}

const init = () => {
    generateNPCs();
}


// Server initiatlization begins here.
init();



// Express is currently installed,
// uncomment this to begin the server.

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })