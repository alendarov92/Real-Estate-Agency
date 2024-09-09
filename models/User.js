const mongoose = require('mongoose');

const userChema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    }

});

const User = mongoose.model('User', userChema);

module.exports = User;