//Lighthouse Lab
//Week 2, Day 4
//Cats as a Service
//Source: https://docs.thecatapi.com/api-reference/breeds/breeds-search?q=sib

const net = require('net');

const request = require('request');

let breedName = process.argv[2];




// request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {  //replace sib
//   if (error) {
// console.error('error:', error); //statement for API error 
//     return; // stop function
//   }
//   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   //console.log('body:', body); // Print the HTML for the Google homepage.
//   //console.log(typeof body); // should be a string, JSON.parse takes string convert to object 
//   const data = JSON.parse(body); //proceed to next step
//   if (data[0]) {
//     console.log(data[0].description); //breed exists, return array index [0], first item in array is object with property for descrition
//   }
//   else {
//     console.log("Breed does not exist") //mutant breed not exist
//   }
// });

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return callback(error, null); 
    }
    const data = JSON.parse(body);
    //console.log(data[0]);
    const typeOfBreed = data[0];

    if (typeOfBreed) {
      return callback(null, data[0].description);
    } else {
      return callback('Requested breed not found');
    }
  });
};

  
module.exports = {fetchBreedDescription};





