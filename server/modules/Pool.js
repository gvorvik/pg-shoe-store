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