const express = require('express');
const router = express.Router();

const pool = require('../modules/Shoe.Pool');

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

router.put('/', (req, res) => {
    const shoe = req.body;
    console.log(shoe);
    
    pool.query(`UPDATE "shoes"
    SET "type" = ($1),
    "cost" = ($2)
    WHERE "id" = ($3)
    `, [shoe.type, shoe.cost, shoe.id])
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