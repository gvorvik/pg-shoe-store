const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//pg is to SQL as mongoose is to MongoDB
const pg = require('pg');

const shoeRoute = require('./routes/shoes.router');

const PORT = process.env.PORT || 5000;

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

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/shoes', shoeRoute);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})