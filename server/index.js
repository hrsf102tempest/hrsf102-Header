var express = require('express');
let morgan = require('morgan');

let db = require('../database/index.js');

var app = express();
app.use(morgan('combined'))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/biz', express.static('./client/dist'));

app.get('/business/:businessId', function (req, res) {
  let params = req.params.businessId;
  db.getData(params ,(results) => {
    console.log("business api call", results);
    res.end(JSON.stringify(results[0]))
  });
});
 
app.listen(3004)