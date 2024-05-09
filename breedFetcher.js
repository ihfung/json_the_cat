const needle = require('needle'); //import the needle module to make http requests
const userInput = process.argv.slice(2); //get the user input from the command line
const breedName = userInput[0]; //get the breed name from the user input

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => { //respone does not need to be used but response is the response from the server. body is the data that is returned from the server
  if (error) {
    console.error('Error:', error);
    
  }
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof body); // body is a object
  //console.log(body[0].description); //get the description of the breed from the object
  //Write code to output an appropriate message if the requested breed is not found.
  if (body.length === 0) { //if the body is empty, the breed is not found
    console.log('Breed not found');
    
  }
  const desc = body[0].description; //get the description of the breed from the object
  console.log(desc); //print the description of the breed
});


