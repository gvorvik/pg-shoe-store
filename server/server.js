const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const shoeRoute = require('./routes/shoes.router');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/shoes', shoeRoute);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})