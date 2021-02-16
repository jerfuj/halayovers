const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const { getCities, getReviews, postReview, upVote, sortReviews } = require('../database/index');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../client/dist`));

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
  const { sort } = req.query;
  sortReviews(id, sort, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    console.log(data);
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

app.patch('/api/review/:id/upvote', (req, res) => {
  const { id } = req.params;
  upVote(id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(data);
  })

})


app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../client/dist/')});
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})