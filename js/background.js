const bgList_light =[
    "1.jpeg",
    "2.png",
    "3.jpg",
    "4.jpg",
    "7.png",
    "8.jpeg",
    "9.jpeg",
    "10.jpg",
    "11.jpeg",
];

const bgList_dark=[
    "5.png",
    "6.jpg",
];

const chosenImg_light = bgList_light[Math.floor(Math.random()*bgList_light.length)];
const chosenImg_dark = bgList_dark[Math.floor(Math.random()*bgList_dark.length)];

const bgImage = document.createElement("img");

bgImage.src =`img/${chosenImg_light}`;
document.body.appendChild(bgImage);

// 다크모드 추가
const body = document.querySelector('body');
const darkBtn = document.querySelector('.darkBtn');
const lightBtn = document.querySelector('.lightBtn');
const DARKBTN_CLASS='dark_mode';

lightBtn.addEventListener('click',()=>{

document.body.classList.remove(DARKBTN_CLASS);

})


darkBtn.addEventListener('click',()=>{

    document.body.classList.add(DARKBTN_CLASS);
    
})