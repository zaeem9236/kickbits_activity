const express = require('express');
const mongoose = require('mongoose');
const app = express.Router();
var {leads} = require('../MongooseModel/Model');



app.get('/', (req, res) => {
    const newLead = new leads({
        Lead_name: `${req.query.name}`,
        Lead_company: `${req.query.company}`,
        Lead_domain: `${req.query.domain}`,
        Lead_conversion_status: req.query.conversion,
        Lead_brodcast_status: req.query.broadcast,
        Lead_created_by: `${req.query.created_by}`,
        Registered_email: `${req.query.email}`
    })
    newLead.save()
        .then(() => { res.status(200).send(`new lead created succesfully`) })
        .catch((err) => { res.status(200).send(`error while creatin new Lead \r\n${err}`) })
})


app.get('*', (req, res) => { // custom error message when page not found    
    res.status(404).send('invalid request for creating lead');
})

module.exports = app;