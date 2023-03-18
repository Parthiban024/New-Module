const jsonServer =  require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./csvjson.json");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();



// require('dotenv').config();

const port = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://ParthiGMR:Parthiban7548@parthibangmr.1quwer2.mongodb.net/mydatabase-six", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log(err));
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Define the schema for employee reviews
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emppid: { type: String, required: true },
  reviewerName: { type: String, required: true },
  commOne: { type: String, required: true },
  commTwo: { type: String, required: true },
  commThree: { type: String, required: true },
  reviewPeriod: { type: String, required: true },
  reviewPeriodTwo: { type: String, required: true },
  selectOne: { type: String, required: true },
  selectTwo: { type: String, required: true },
  selectThree: { type: String, required: true },
  selectFour: { type: String, required: true },
  selectFive: { type: String, required: true },
  selectSix: { type: String, required: true },
  selectSeven: { type: String, required: true },
  selectEight: { type: String, required: true },
  selectNine: { type: String, required: true },
  selectTen: { type: String, required: true },
  place: { type: String, required: true },
  date: { type: String, required: true },
  sign: { type: String, required: true },
});

// Create a model for employee reviews using the schema
const Review = mongoose.model('Review', reviewSchema);

// Define the routes for performing CRUD operations
app.post('/employee', (req, res) => {
  const empdata = req.body;
  const newReview = new Review(empdata);
  newReview.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving data!');
      return;
    }
    res.send('Data saved successfully!');
  });
});

app.get('/employee', (req, res) => {
  Review.find((err, reviews) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error getting data!');
      return;
    }
    res.send(reviews);
  });
});

app.get('/employee/:id', (req, res) => {
  const id = req.params.id;
  Review.findById(id, (err, review) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error getting data!');
      return;
    }
    res.send(review);
  });
});

app.put('/employee/:id', (req, res) => {
  const id = req.params.id;
  const empdata = req.body;
  Review.findByIdAndUpdate(id, empdata, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error updating data!');
      return;
    }
    res.send('Data updated successfully!');
  });
});


// Delete an employee record by ID
app.delete('/employee/:id', async (req, res) => {
  try {
    const result = await Employee.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send('Employee record not found');
    }
    res.send('Employee record deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting employee record');
  }
});
const middlewares = jsonServer.defaults({
    static: "./build"
})

// const port = process.env.PORT || 8000;
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