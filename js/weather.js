const API_KEY ="3c070f38a102c77b2e469d14e94d4d6b";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon =position.coords.longitude;
   
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
      
        city.innerText =data.name;
        weather.innerText=
         `${data.weather[0].main} 
         ${data.main.temp} ℃`;
    
         // 아이콘 바뀌는 함수
         const weatherInfo = data.weather[0].main;
         const iconChangeCloud = document.querySelector("#weather_icons_cloud");
         const iconChangeRain = document.querySelector("#weather_icons_rain");
         const iconChangeClear = document.querySelector("#weather_icons_clear");
         const iconChangeDrizzle = document.querySelector("#weather_icons_drizzle");
         const iconChangeSnow = document.querySelector("#weather_icons_snow");
         const iconChangeStorm = document.querySelector("#weather_icons_storm");

         const HIDDEN_CLASS="hidden";
        
         function weatherIcon(){
            if (weatherInfo === "Clouds"){
                iconChangeCloud.classList.remove(HIDDEN_CLASS);
            }

            else if (weatherInfo === "Thunderstorm"){
                iconChangeStorm.classList.remove(HIDDEN_CLASS);
            }

            else if (weatherInfo === "Rain"){
                iconChangeRain.classList.remove(HIDDEN_CLASS);
            }

            else if (weatherInfo === "Snow"){
                iconChangeSnow.classList.remove(HIDDEN_CLASS);
            }

            else if (weatherInfo === "Clear"){
                iconChangeClear.classList.remove(HIDDEN_CLASS);
            }

            else{
                iconChangeDrizzle.classList.remove(HIDDEN_CLASS);
            }
         }

         weatherIcon();      


    });  


}

    



function onGeoError(){
 alert("Can't find you. No Weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);