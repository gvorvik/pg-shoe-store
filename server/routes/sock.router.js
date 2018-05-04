const express = require('express');
const router = express.Router();

const pool = require('../modules/Sock.Pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "socks";`)
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;