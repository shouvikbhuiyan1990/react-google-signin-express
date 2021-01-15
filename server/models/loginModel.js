require('../db/connection');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    loginToken: {
        type: String,
        required: true
    }
});

const Login = mongoose.model('login', schema);

module.exports = Login;