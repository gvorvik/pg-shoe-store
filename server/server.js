const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Shoes = require('./modules/shoe.module');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/shoes', (req, res) => {
    res.send(Shoes);
});

app.post('/shoes', (req, res) => {
    const newShoes = req.body;
    console.log(newShoes);    
    Shoes.push(newShoes);
    res.send(Shoes);
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})