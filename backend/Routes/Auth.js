const express = require('express');
const mongoose = require('mongoose');
const app = express.Router();
const { authusers } = require('../MongooseModel/Model');


app.get('/', (req, res) => {
    let authStatus = authusers.find({ email: `${req.query.email}`, password: `${req.query.password}` }, (err, data) => {
        if (err) {
            res.status(200).send(err)
        } else {
            if (data.length === 0) {
                res.status(200).send({
                    token: {
                        userName: '',
                        verified: false,
                        email: ''
                    }
                })
            } else {
                res.status(200).send({
                    token: {
                        userName: data[0].name,
                        verified: true,
                        email: data[0].email
                    }
                })
            }
        }
    })
})



app.get('*', (req, res) => { // custom error message when page not found    
    res.status(404).send('invalid request for auth verify');
})

module.exports = app;