const needle = require('needle'); //import the needle module to make http requests

const fetchBreedDescription = function(breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => { //respone does not need to be used but response is the response from the server. body is the data that is returned from the server
    if (error) {
      callback(error, null); //if there is an error, call the callback function with the error and the description value is null
      //callback(error value, description value)
    } else {
      error = null;
      //console.log('body:', body); // Print the HTML for the Google homepage.
      //console.log(typeof body); // body is a object
      //console.log(body[0].description); //get the description of the breed from the object
      //Write code to output an appropriate message if the requested breed is not found.
      if (body.length === 0) { //if the body is empty, the breed is not found
        callback(`Breed ${breedName} not found`, null); //call the callback function with the error message
    
      }
      const desc = body[0].description; //get the description of the breed from the object
      callback(null, desc); //call the callback function with the description
    }
  });
};



module.exports = { fetchBreedDescription }; //export the function to be used in another file