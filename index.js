//Lighthouse Lab
//Week 2, Day 4
//Cats as a Service
//Source: https://docs.thecatapi.com/api-reference/breeds/breeds-search?q=sib

const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

//const net = require('net'); // ASK DO I NEED THIS ONE?
//const request = require('request'); // ASK DO I STILL NEED THIS ONE?

// 1.  Fetch function also needs to be asynchronous. It should therefore accept a callback

// 2. This file will be the one that users can run and provide the breed name to.

// 3. It will then require the breedFetcher file and call its exported function.

// 4. TASK. REFACTOR THE CODE | MOVING THE REQUEST LOGIC INTO A FUNCTION

//request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, 


// function (error, response, body) {  //replace sib
//   if (error) {
//     console.error('error:', error); //statement for API error 
//     return; // stop function
//   }
 
//   const data = JSON.parse(body); //proceed to next step
//   if (data[0]) {
//     console.log(data[0].description); //breed exists, return array index [0], first item in array is object with property for descrition
//   }
//   else {
//     console.log("Breed does not exist") //mutant breed not exist
//   }
// });


//  Fetch function also needs to be asynchronous. It should therefore accept a callback. 

// This function should call the callback with either an error if there's a error or null if there isn't, for the first argument.

//const fetchBreedDescription = function (breedName, callback) {

//};


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error' , error ); // best practice...
} else {
  console.log("This is the description", desc)
}
})




















//Test code:
//node breedFetcher.js Platypus 
//node breedFetcher.js Chartreux
//process.argv[2] for node breedFetcher.js Chartreux
//assign varible for that
//secify breed name when run function ie node breedFetcher.js Chartreux