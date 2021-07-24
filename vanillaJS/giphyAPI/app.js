const fetch = require('node-fetch');
require('dotenv').config();

console.log(process.env.API_KEY);

fetch(
  'https://api.giphy.com/v1/gifs/trending?api_key=' +
    process.env.API_KEY +
    '&limit=3&rating=r'
)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
