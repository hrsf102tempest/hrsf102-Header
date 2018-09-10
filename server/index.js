var express = require('express');
let morgan = require('morgan');

let db = require('../database/index.js');

var app = express();
app.use(morgan('combined'))
app.use('/biz', express.static('./client/dist'))

// app.get('/', function (req, res) {
//   res.sendFile("../client/dist/index.html")
// })

app.get('/business/:businessId', function (req, res) {
  let params = req.params.businessId
  db.getData(params ,(results) => {
    console.log("business api call", results);
    res.end(JSON.stringify(results[0]))
  })
})
 
app.listen(3004)