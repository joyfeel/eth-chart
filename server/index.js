const express = require('express');
const config = require('./config');
const price = require('./router/coin/price');

let app = express();
app.use('/price',price);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(config.port,()=>console.log("connect"));
