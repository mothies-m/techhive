const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json());
app.use(cors());

app.set('port', 3001)
app.listen(3001)

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect("mongodb+srv://gogdrigo:huntking@cluster0.8k2sy6o.mongodb.net/drigo");

const database = mongoose.connection;
const Model = require('./models/mod');

database.once('connected', () => {console.log('ok')})

app.get('/contact', async(req,res) => {
    const data = await Model.find();
        res.json(data);
});

app.post('/contact/add', async(req) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        mobNumb: req.body.mobNumb
    });
    await data.save();
});