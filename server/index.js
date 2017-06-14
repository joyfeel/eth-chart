require('es6-promise').polyfill();
require('isomorphic-fetch');
const express = require('express');
const config = require('./config');
const router = require('./router');



let app = express();
router(app);

app.listen(config.port,()=>console.log("connect"));
