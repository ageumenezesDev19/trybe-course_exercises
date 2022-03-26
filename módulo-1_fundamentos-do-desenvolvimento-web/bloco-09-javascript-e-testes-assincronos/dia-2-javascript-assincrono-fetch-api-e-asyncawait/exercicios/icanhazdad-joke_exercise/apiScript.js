// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const getJoke = (jokeMessage) => {
  const h2Joke = document.getElementById('jokeContainer');
  h2Joke.innerText = jokeMessage;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
        const theJoke = data.joke;
        getJoke(theJoke);
    });
};

window.onload = () => fetchJoke();
