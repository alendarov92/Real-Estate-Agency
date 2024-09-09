const mongoose = require('mongoose');

const { DB_QUERYSTRING } = require('./env');

exports.dbInit = () => {
    mongoose.connection.on('open', () => console.log('DB is conected!!!'))
    // Returnig the promise
    return mongoose.connect(DB_QUERYSTRING);
}
