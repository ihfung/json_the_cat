const needle = require('needle');


needle.get('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    
  }
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body);
});