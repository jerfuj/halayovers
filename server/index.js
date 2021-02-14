const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../client/dist`));


app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../client/dist/')});
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})