const needle = require('needle');


needle.get('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});