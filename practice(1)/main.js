const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');


function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;

    loginForm.classList.add('hidden');
    
   console.log(userName);
    
}

loginForm.addEventListener('submit',loginSubmit)