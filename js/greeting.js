const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASS="hidden";


function loginSubmit(event){
    const userName =loginInput.value; 
   
    event.preventDefault();     
    loginForm.classList.add(HIDDEN_CLASS);
    console.log(userName);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS);


}

loginForm.addEventListener("submit",loginSubmit);

