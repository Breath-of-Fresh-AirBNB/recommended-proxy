const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Proxy listening at ${port}`)
})