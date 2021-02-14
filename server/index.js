const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const { getCities, getReviews } = require('../database/index');

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


app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../client/dist/')});
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})