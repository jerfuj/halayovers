const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(`${__dirname}/../client/dist`));


app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})