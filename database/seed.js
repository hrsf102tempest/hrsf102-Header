const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelpest');
var data = require("./primarydata.js")

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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandom(a, n) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

// let getRandom = (arr, n) => {
//   var result = new Array(n),
//       len = arr.length,
//       taken = new Array(len);
//   if (n > len)
//       throw new RangeError("getRandom: more elements taken than available");
//   while (n--) {
//       var x = Math.floor(Math.random() * len);
//       result[n] = arr[x in taken ? taken[x] : x];
//       taken[x] = --len in taken ? taken[len] : len;
//   }
//   return result;
// }

let Business = mongoose.model('Business', businessSchema);

let parentCategories = ["Restaurants", "IT Services & Computer Repair (itservices)"]
let childCategories = [{
  parent: "Restauraunt",
  child: ["American (New)",
  "American (Traditional)",
  "Arabian",
  "Argentine",
  "Armenian",
  "Asian Fusion",
  "Australian",
  "Austrian",
  "Bangladeshi",
  "Barbeque",
  "Basque",
  "Belgian",
  "Brasseries",
  "Brazilian",
  "Breakfast & Brunch",
  "British",
  "Buffets",
  "Bulgarian",
  "Burgers",
  "Burmese",
  "Cafes",]
  },{
  parent: "Shopping",
  child: [
  "Antiques",
  "Art Galleries",
  "Arts & Crafts",
  "Brewing Supplies",
  "Bridal",
  "Cannabis Dispensaries",
  "Computers",
  "Cosmetics & Beauty Supply",
  "Customized Merchandise",
  "Department Stores",
  "Discount Store",
  "Drones"
  ]
  }]

for (let i = 0; i < data.data.length; i++){
  
  let claimedBool = getRandomInt(2) ? true : false
  let dollarSigns = getRandomInt(4) + 1;
  let totalReviews = getRandomInt(300) + 1;
  let categories = []
  let numberOfCategories = getRandomInt(3) + 1
  for (let j = 0; j < numberOfCategories; j++){
    parentCategorySeed = getRandomInt(2)
    parentCategory = parentCategories[parentCategorySeed],
    childCategorySeed = childCategories[parentCategorySeed].child
    childCategory = getRandom(childCategorySeed, 1)
    categories.push({
      parentCategory: parentCategory,
      childCategory: childCategory
    })
  }

  let newBusiness = new Business({
    id: i + 1,
    name: data.data[i].name,
    claimed: claimedBool,
    dollarSigns: dollarSigns,
    totalReviews: totalReviews, 
    categories: categories,
    reviews: {
      '2018': {
        '01': (getRandomInt(10) + 1) / 2,
        '02': (getRandomInt(10) + 1) / 2,
        '03': (getRandomInt(10) + 1) / 2,
        '04': (getRandomInt(10) + 1) / 2,
        '05': (getRandomInt(10) + 1) / 2,
        '06': (getRandomInt(10) + 1) / 2,
        '07': (getRandomInt(10) + 1) / 2,
        '08': (getRandomInt(10) + 1) / 2,
        '09': (getRandomInt(10) + 1) / 2,
      },
      '2017': {
        '01': (getRandomInt(10) + 1) / 2,
        '02': (getRandomInt(10) + 1) / 2,
        '03': (getRandomInt(10) + 1) / 2,
        '04': (getRandomInt(10) + 1) / 2,
        '05': (getRandomInt(10) + 1) / 2,
        '06': (getRandomInt(10) + 1) / 2,
        '07': (getRandomInt(10) + 1) / 2,
        '08': (getRandomInt(10) + 1) / 2,
        '09': (getRandomInt(10) + 1) / 2,
        '10': (getRandomInt(10) + 1) / 2,
        '11': (getRandomInt(10) + 1) / 2,
        '12': (getRandomInt(10) + 1) / 2
      },
      '2016': {
        '01': (getRandomInt(10) + 1) / 2,
        '02': (getRandomInt(10) + 1) / 2,
        '03': (getRandomInt(10) + 1) / 2,
        '04': (getRandomInt(10) + 1) / 2,
        '05': (getRandomInt(10) + 1) / 2,
        '06': (getRandomInt(10) + 1) / 2,
        '07': (getRandomInt(10) + 1) / 2,
        '08': (getRandomInt(10) + 1) / 2,
        '09': (getRandomInt(10) + 1) / 2,
        '10': (getRandomInt(10) + 1) / 2,
        '11': (getRandomInt(10) + 1) / 2,
        '12': (getRandomInt(10) + 1) / 2
      },
    },
  });

  newBusiness.save((err) => {
    if (err) return console.error(err);
  })
}
