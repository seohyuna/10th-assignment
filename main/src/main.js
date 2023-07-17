const btn = document.getElementById('btn');
const word = document.getElementById('word');

btn.addEventListener('click', () => {
  getWord();
});

const getWord = () => {
  axios.get('https://random-word-api.herokuapp.com/word')
    .then(response => {
      console.log(response);
    })
}

const email = document.getElementById('email');
const password = document.getElementById('pw');

const Login =() => {
  axios.post('https://reqres.in/api/login',{
    email: email.value,
    password: password.value,
  }).then((res)=> {
    console.log(res);
  }).catch((err)=> {
    console.log(err);
  })
}


//'https://random-word-api.herokuapp.com/word'
//'https://reqres.in/api/login'
