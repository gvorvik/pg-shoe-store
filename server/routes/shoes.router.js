const express = require('express');
const router = express.Router();

const Shoes = require('../modules/shoe.module');

router.get('/', (req, res) => {
    res.send(Shoes);
});

router.post('/', (req, res) => {
    const shoe = req.body;
    console.log(shoe);    
    Shoes.push(shoe);
    res.send(Shoes);

    // //the $1, $2, and array after is a way for pg to sanitize information
    // //and prevent malicious users from entering hard coded code to drop table or return
    // //private information
    // pool.query(`INSERT INTO "shoes" ("type", "cost")
    //             VALUES ($1, $2);`, [shoe.type, shoe.cost])
    //     .then((results) => {
    //         res.sendStatus(200);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         res.sendStatus(500);
    //     });
});

module.exports = router;