// index.js
const { fetchBreedDescription } = require('./breedFetcher'); //import the fetchBreedDescription function from the breedFetcher file

const breedName = process.argv[2]; //get the breed name from the command line

fetchBreedDescription(breedName, (error, desc) => { //call the fetchBreedDescription function with the breed name and a callback function
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});