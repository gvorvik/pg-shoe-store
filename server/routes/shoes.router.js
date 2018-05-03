const express = require('express');
const router = express.Router();

const Shoes = require('../modules/shoe.module');

// router.get('/', (req, res) => {
//     res.send(Shoes);
// });

// router.post('/', (req, res) => {
//     const newShoes = req.body;
//     console.log(newShoes);    
//     Shoes.push(newShoes);
//     res.send(Shoes);
// });

module.exports = router;