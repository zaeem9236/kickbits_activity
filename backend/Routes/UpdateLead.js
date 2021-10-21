const express = require('express');
const mongoose = require('mongoose');
const app = express.Router();
var {leads} = require('../MongooseModel/Model');


app.get('/conversion', (req, res) => {
    let data = leads.updateOne({_id: `${req.query.id}`}, {$set:{Lead_conversion_status: req.query.conversion}})
    .then(()=>{ res.status(200).send(`conversion status updated`)})
    .catch((err)=>{ res.status(200).send(`unable to update conversion status \r\n${err}`)})
})

app.get('/broadcast', (req, res) => {
    let data = leads.updateOne({_id: `${req.query.id}`}, {$set:{Lead_brodcast_status: req.query.broadcast}})
    .then(()=>{ res.status(200).send(`bradcast status updated`)})
    .catch((err)=>{ res.status(200).send(`unable to update broadcast status \r\n${err}`)})
})


app.get('*', (req, res) => { // custom error message when page not found    
    res.status(404).send('invalid request for updatin lead');
})

module.exports = app;