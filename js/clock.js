const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const mins =String(date.getMinutes()).padStart(2,"0");
    const secs =String(date.getSeconds()).padStart(2,"0");

    clock.innerText =
    `${hours}:${mins}:${secs}`;
    }

getClock();
setInterval(getClock,1000);


const clockTitle = document.querySelector(".js-clock");
const today = new Date();
const dDay = new Date("2022-12-25, 00:00:00");

function getTime() {
  const gap = dDay-today;



  clockTitle.innerText = `${today}:${hrs}:${mins}:${secs}`;
}
