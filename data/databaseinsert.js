var mysql = require('mysql');
var mysqlConfig = require("../database/config.js")
var data = require("./FECdata2.js")

var connection = mysql.createConnection(mysqlConfig);

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  console.log(data);


  for (let i = 0; i < data.data.length; i++){
    let isClaimed= getRandomInt(2)
    let sql = `INSERT INTO businesses (business, claimed) VALUES ("${data.data[i].name}", ${isClaimed});`
    connection.query(sql, (err, result) => {
      if (err) throw err; 
      console.log(result)
    }) 
  }
  
  // for (let i = 1; i < data.data.length + 1; i++){
  //   let randomNumberOfTags = getRandomInt(2) + 1;
  //   let randomTags = getRandom(data.tagsdata, randomNumberOfTags)
  //   console.log(i);
  //   let sql = `INSERT INTO Categories (businessID, Tag1, Tag2, Tag3) VALUES (${i}, "${randomTags[0]}", "${randomTags[1] ? randomTags[1] : null}", "${randomTags[2] ? randomTags[2] : null}" );`
  //   connection.query(sql, (err, result) => {
  //     if (err) throw err;
  //     console.log(result);
  //   })
  // }

  let dateArray = [
    "0116",
    "0216",
    "0316",
    "0416",
    "0516",
    "0616",
    "0716",
    "0816",
    "0916",
    "1016",
    "1116",
    "1216",
    "0117",
    "0217",
    "0317",
    "0417",
    "0517",
    "0617",
    "0717",
    "0817",
    "0917",
    "1017",
    "1117",
    "1217",
    "0118",
    "0218",
    "0318",
    "0418",
    "0518",
    "0618",
    "0718",
    "0818",
    "0918",
  ] 

  // for (let i = 1; i < data.data.length + 1; i++){
  //   let numberOfReviewsThisMonth = getRandomInt(25) + 1
  //   for (let j = 0; j < dateArray.length; j++){
  //     let ratingForMonth = getRandomInt(10) + 1
  //     let sql = `INSERT INTO Reviews (businessID, Rating, Date) VALUES (${i}, ${ratingForMonth / 2}, "${dateArray[j]}");`
  //     connection.query(sql, (err, result) => {
  //       if (err) throw err;
  //       console.log(result);
  //     })
  //   }
  // }
});

// CREATE TABLE Reviews(
// 	ReviewID int NOT NULL AUTO_INCREMENT,
// 	BusinessID int,
// 	Rating int,
// 	Date varchar (255),
// 	Primary Key (ReviewID),
// 	FOREIGN KEY (BusinessID) REFERENCES Businesses (BusinessID)
// );
