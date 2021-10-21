const express = require('express');
const mongoose = require('mongoose');
const app = express.Router();
var {leads} = require('../MongooseModel/Model');



app.get('/userleads', (req, res) => {
    let data = leads.find({Registered_email: `${req.query.email}`}, (err, data)=>{
        if (err) {
          res.status(200).send(err)
      } else {
        res.status(200).send(data)
      }
      })
})

app.get('/broadcastedusers', (req, res) => {
    let data = leads.find({Lead_brodcast_status: true}, (err, data)=>{
        if (err) {
          res.status(200).send(err)
      } else {
        res.status(200).send(data)
      }
      })
})




app.get('*', (req, res) => { // custom error message when page not found    
    res.status(404).send('invalid request for reading lead');
})

module.exports = app;