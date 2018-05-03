const express = require('express');
const router = express.Router();
const pg = require('pg');

const Shoes = require('../modules/shoe.module');


//Capital P = class or constructor!!!
//This code takes care of connecting to our database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'shoe_store', //name of database
    host: 'localhost', // where is database
    port: 5432, //location of port (5432 is default for postgres)
    max: 10, //how many connections at one time
    idleTimeoutMillis: 30000 //30 seconds to try to connect, otherwise cancel query
});

//these lines aren't needed, but are helpful to know if we connected
pool.on('connect', () => {
    console.log('postgresql connected');
})

pool.on('error', (error) => {
    console.log('Error with postgresql', error);
});


router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "shoes";`)
    .then(function(response) {
        res.send(response);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const shoe = req.body;
    console.log(shoe);    

    //the $1, $2, and array after is a way for pg to sanitize information
    //and prevent malicious users from entering hard coded code to drop table or return
    //private information
    pool.query(`INSERT INTO "shoes" ("type", "cost")
                VALUES ($1, $2);`, [shoe.type, shoe.cost])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    const shoe = req.query;
    console.log(shoe);
    
    pool.query(`DELETE FROM "shoes"
    WHERE "type" = ($1)
    AND "cost" = ($2)
    AND "id" = ($3);`, [shoe.type, shoe.cost, shoe.id])
    .then((results) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;