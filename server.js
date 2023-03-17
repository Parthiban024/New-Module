const jsonServer =  require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./csvjson.json");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://ParthiGMR:Parthiban7548@parthibangmr.1quwer2.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Connected to MongoDB!');
    const collection = client.db('mydatabase-nain').collection('reviews');
    // Perform actions on the collection object
   
    client.close();
  });
const app = express();
app.use(cors());
app.use(bodyParser.json());
// Add a new review
  app.post('/employee', (req, res) => {
    const empdata = req.body;
    const collection = client.db('mydatabase-main').collection('reviews');
    collection.insertOne(empdata, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error saving data!');
        return;
      }
      res.send('Data saved successfully!');
    });
  });

const middlewares = jsonServer.defaults({
    static: "./build"
})

const port = process.env.PORT || 8000;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
)

server.use(router);
server.listen(port, ()=> {
    console.log(`Server running on ${port}`)
})