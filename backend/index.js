
/* Express Configuration */
const express = require("express");
const app = express();
app.use(express.json()); // use when you want echo response via post method
let CreateLead = require('./Routes/CreateLead.js');
let UpdateLead = require('./Routes/UpdateLead.js');
app.use('/createlead',CreateLead);
app.use('/updatelead',UpdateLead);

/* Mongoose Configuration */
const mongoose = require('mongoose');

const mongodb_URI = "mongodb+srv://mongodb-cluster:zaeemhere@cluster4testing.3glwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongodb_URI || 'mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true} )
.then(()=>{console.log('mongo db connection successfull')})
.catch((err)=>{console.log(`mongo db connection failed err:${err}`)});

const port = 5000;


app.get('/', (req, res) => { // app.get(route, callback(req, res))
    res.status(200).send('<h1>home page</h1>');
})

app.get('/test', (req, res) => { // app.get(route, callback(req, res))
    res.status(200).send('test route');
})

app.get('/create', (req, res) => { // app.get(route, callback(req, res))
  const emp = new EmployeeData({
    name: `${req.query.name}`,
    age: `${req.query.age}`,
    disable: `${req.query.disable}`
  })
  emp.save()
  .then(()=>{ res.status(200).send(`new document created`)})
  .catch((err)=>{ res.status(200).send(`${err}`)})
})

app.get('/read', (req, res) => {  
  let data = EmployeeData.find({}, (err, data)=>{
    if (err) {
      res.status(200).send(err)
  } else {
    res.status(200).send(data)
  }
  })
    
})

app.get('/update', (req, res) => {  
  let data = EmployeeData.updateOne({_id: `${req.query.id}`}, {$set:{name: `${req.query.name}`}})
  .then(()=>{ res.status(200).send(`document updated`)})
  .catch((err)=>{ res.status(200).send(`${err}`)})
    
})


app.get('/delete', (req, res) => {  
  let data = EmployeeData.deleteOne({_id: `${req.query.id}`})
  .then(()=>{ res.status(200).send(`document deleted`)})
  .catch((err)=>{ res.status(200).send(`${err}`)})
    
})


app.get('*', (req, res) => { // custom error message when page not found    
    res.status(404).send('page not found');
})



app.listen(port, () => { // listening to request at port 5000
  console.log(`Listening to port at ${port}`)
})