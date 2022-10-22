const bgList =[
    "1.jpeg",
    "2.png",
    "3.jpg",
    "4.jpg",
    "5.png",
    "6.jpg",
    "7.png",
    "8.jpeg",
    "9.jpeg",
    "10.jpg",
    "11.jpeg",
];

const chosenImg = bgList[Math.floor(Math.random()*bgList.length)];
const bgImage = document.createElement("img");

bgImage.src =`img/${chosenImg}`;
document.body.appendChild(bgImage);
