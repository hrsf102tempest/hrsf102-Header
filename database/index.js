const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelpest');

let businessSchema = mongoose.Schema({
  id: Number,
  name: String,
  claimed: Boolean,
  dollarSigns: Number,
  totalReviews: Number, 
  categories: [
      {
        parentCategory: String,
        childCategory: String,
      }
    ],
  reviews: {
    '2018': {
      '01': Number,
      '02': Number,
      '03': Number,
      '04': Number,
      '05': Number,
      '06': Number,
      '07': Number,
      '08': Number,
      '09': Number,
    },
    '2017': {
      '01': Number,
      '02': Number,
      '03': Number,
      '04': Number,
      '05': Number,
      '06': Number,
      '07': Number,
      '08': Number,
      '09': Number,
      '10': Number,
      '11': Number,
      '12': Number
    },
    '2016': {
      '01': Number,
      '02': Number,
      '03': Number,
      '04': Number,
      '05': Number,
      '06': Number,
      '07': Number,
      '08': Number,
      '09': Number,
      '10': Number,
      '11': Number,
      '12': Number
    }
  },
});

let Business = mongoose.model('Business', businessSchema);

getAllData = (callback) => {
  Business.find((err, results) => {
    if (err) return console.error(err);
    callback(results);
  });
}
getData = (businessIdParam ,callback) => {
  Business.find({id: businessIdParam}, (err, results) => {
    if (err) return console.error(err);
    callback(results);
  });
}

module.exports = {
  getAllData: getAllData,
  getData: getData
};
  
