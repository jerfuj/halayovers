const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const {
  getCities,
  getReviews,
  postReview,
  upVote,
  sortReviews,
  getUser,
  deleteReview,
  editReview
} = require('./database/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.post('/login', (req, res) => {
  const { empNumber, password } = req.body;
  getUser(empNumber, password, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(data[0] || []);
  })
})

app.get('/api/cities', (req, res) => {
  getCities((err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(data);
  })
})

app.get('/api/cities/:id', (req, res) => {
  const { id } = req.params;
  getReviews(id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(data);
  })
})

/*  SORTING REVIEWS  */
app.get('/api/:id', (req, res) => {
  const { id } = req.params;
  const { sort, category } = req.query;
  sortReviews(id, sort, category, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(data);
  })
})

app.post('/api/cities/:id/review', (req, res) => {
  const { id } = req.params;
  postReview(id, req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(data);
  })
})

app.patch('/api/cities/review/:id', (req, res) => {
  const { id } = req.params;
  editReview(id, req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(data);
  })
})

app.patch('/api/review/:id/upvote', (req, res) => {
  const { id } = req.params;
  upVote(id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(data);
  })
})

app.delete('/api/review/:id/delete', (req, res) => {
  const { id } = req.params;
  deleteReview(id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(data);
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})