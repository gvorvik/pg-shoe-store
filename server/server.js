const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//pg is to SQL as mongoose is to MongoDB
const pg = require('pg');

const shoeRoute = require('./routes/shoes.router');
const sockRoute = require('./routes/sock.router');

const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/shoes', shoeRoute);
app.use('/socks', sockRoute);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
