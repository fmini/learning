// require('dotenv').config();

let gifyData;
let url;
let search;

function fetchData() {
  fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=TcXjwdVNRkJqM2hoJUyoa3SuVl5Q94D9&q=bikini&limit=50&offset=0&rating=r&lang=en'
  )
    .then(res => {
      if (!res.ok) {
        throw Error('ERROR');
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      return (gifyData = data);
    })
    .catch(err => {
      console.log(err);
    });
  console.log(gifyData);
}

fetchData();

// event listeners

document
  .querySelector('#search')
  .addEventListener('submit', e => console.log(e.target.value));

document.querySelector('#renew').addEventListener('click', () => {
  fetchData();
  let gifnum = Math.floor(Math.random() * 50);
  console.log(gifnum);
  url = gifyData.data[gifnum].images.original.webp;
  document.querySelector('#gify-container').src = url;
});
