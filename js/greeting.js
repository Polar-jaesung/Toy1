const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASS="hidden";
const USERNAME_KEY="username";

function loginSubmit(event){
    const userName =loginInput.value; 
   
    event.preventDefault();     
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreeting(userName);
}

function paintGreeting(userName){
    loginForm.classList.add(HIDDEN_CLASS);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS);
};

const savedName = localStorage.getItem(USERNAME_KEY);

if(savedName === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",loginSubmit);
}
else{
    paintGreeting(savedName);
}
