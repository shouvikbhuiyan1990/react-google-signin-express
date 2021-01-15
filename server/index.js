const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const Login = require('./models/loginModel');
const { authenticateUser } = require('./controller/auth');
const secretkey = require('./config/secret.json');

const app = express();
var cors = require('cors');

app.use(cors());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.post('/login/user', async (req, res) => {

    const {
        email,
        name,
    } = req.body;

    const loginToken = jwt.sign(`${email}`, secretkey.key);


    try {
        const loginData = new Login({
            email,
            name,
            loginToken
        });
        await loginData.save();
        res.status(200).send({
            success: true
        });
    }
    catch (e) {
        res.status(500).send({
            error: e
        });
    }
});


app.get('/user/authenticated/getAll', authenticateUser, async (req, res) => {
    try {
        const data = await Login.find({});
        res.status(200).send({
            users: data
        });
    }
    catch (e) {
        res.status(500).send({
            error: e
        });
    }
});

app.listen(9191);