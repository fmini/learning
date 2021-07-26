// require('dotenv').config();

let gifyData;
let url;
let search;

function fetchData(search, offset) {
  fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=TcXjwdVNRkJqM2hoJUyoa3SuVl5Q94D9&q=' +
      search +
      '&limit=50&offset=' +
      offset +
      '&rating=r&lang=en'
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

function randomStart() {
  return (offset = Math.floor(Math.random() * 500));
}

function randomGif() {
  return (gifnum = Math.floor(Math.random() * 50));
}
// event listeners

document.querySelector('#search').addEventListener('click', e => {
  search = document.querySelector('#searchfield').value;
  fetchData(search, randomStart());
  randomStart();
  randomGif();
  setTimeout(() => {
    document.querySelector('#gify-container').src =
      gifyData.data[gifnum].images.original.webp;
  }, 250);
});

document.querySelector('#renew').addEventListener('click', () => {
  randomGif();
  url = gifyData.data[gifnum].images.original.webp;
  document.querySelector('#gify-container').src = url;
});
