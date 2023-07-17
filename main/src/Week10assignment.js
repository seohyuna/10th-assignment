const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

const btn = document.getElementById('btn');
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const word3 = document.getElementById('word3');

btn.addEventListener('click', () => {
  getWords();
});

const getWords = () => {
  axios.get('https://random-word-api.herokuapp.com/word?number=3')
    .then(response => {
      const words = response.data;
      word1.textContent = words[0];
      word2.textContent = words[1];
      word3.textContent = words[2];
    })
    .catch(error => {
      console.log(error);
    });
};
