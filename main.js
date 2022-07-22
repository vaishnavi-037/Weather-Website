// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//sunny haze snow thunderstorm
const weatherApi = {
    key: "76ea0ab0339fef4f2258f4a2a3e2d2d7",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress',(event) => {
          
          if(event.keyCode == 13){
            console.log(searchInputBox.value);
            getWeatherReport(searchInputBox.value);
            document.querySelector('.weather-body').style.display = "block";
          }
});

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then (weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMixTemp = document.getElementById('min-max');
    minMixTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (MIN) / ${Math.ceil(weather.main.temp_max)}&deg;C (MAX)`;

    let weatherType =  document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;

    let date  = document.getElementById('date');
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate);

    if(weatherType.textContent == 'Clear'){
        // document.body.style.backgroundVideo = "url('images/rain.mp4')";
        document.getElementById("video-background-clear").style.display = "block";
        document.getElementById("video-background-cloud").style.display = "none";
        document.getElementById("video-background-default").style.display = "none";
        document.getElementById("video-background-rain").style.display = "none";
        document.getElementById("video-background-thunder").style.display = "none";
        document.getElementById("video-background-haze").style.display = "none";
        document.getElementById("video-background-smoke").style.display = "none";
        
    }
    else if(weatherType.textContent == 'Clouds'){
        // document.body.style.backgroundVideo = "url('images/rain.mp4')";
        document.getElementById("video-background-cloud").style.display = "block";
        document.getElementById("video-background-default").style.display = "none";
        document.getElementById("video-background-rain").style.display = "none";
        document.getElementById("video-background-thunder").style.display = "none";
        document.getElementById("video-background-haze").style.display = "none";
        document.getElementById("video-background-clear").style.display = "none";
        document.getElementById("video-background-smoke").style.display = "none";
    }
    else if(weatherType.textContent == 'Haze'){
        // document.body.style.backgroundVideo = "url('images/rain.mp4')";
        document.getElementById("video-background-haze").style.display = "block";
        document.getElementById("video-background-default").style.display = "none";
        document.getElementById("video-background-cloud").style.display = "none";
        document.getElementById("video-background-rain").style.display = "none";
        document.getElementById("video-background-thunder").style.display = "none";
        document.getElementById("video-background-clear").style.display = "none";
        document.getElementById("video-background-smoke").style.display = "none";
    }
    else if(weatherType.textContent == 'Rain'){
        // document.body.style.backgroundVideo = "url('images/rain.mp4')";
        document.getElementById("video-background-rain").style.display = "block";
        document.getElementById("video-background-default").style.display = "none";
        document.getElementById("video-background-cloud").style.display = "none";
        document.getElementById("video-background-thunder").style.display = "none";
        document.getElementById("video-background-haze").style.display = "none";
        document.getElementById("video-background-clear").style.display = "none";
        document.getElementById("video-background-smoke").style.display = "none";
    }
    else if(weatherType.textContent == 'Thunderstorm'){
        // document.body.style.backgroundVideo = "url('images/rain.mp4')";
        document.getElementById("video-background-thunder").style.display = "block";
        document.getElementById("video-background-default").style.display = "none";
        document.getElementById("video-background-cloud").style.display = "none";
        document.getElementById("video-background-rain").style.display = "none";
        document.getElementById("video-background-haze").style.display = "none";
        document.getElementById("video-background-clear").style.display = "none";
        document.getElementById("video-background-smoke").style.display = "none";
    }
    else if(weatherType.textContent == 'Mist'){
        
        document.getElementById("video-background-smoke").style.display = "block";
        document.getElementById("video-background-default").style.display = "none";
        document.getElementById("video-background-cloud").style.display = "none";
        document.getElementById("video-background-rain").style.display = "none";
        document.getElementById("video-background-thunder").style.display = "none";
        document.getElementById("video-background-haze").style.display = "none";
        document.getElementById("video-background-clear").style.display = "none";
        
    }
    else if(weatherType.textContent == 'Smog'){
        document.getElementById("video-background-smoke").style.display = "block";
        document.getElementById("video-background-default").style.display = "none";
        document.getElementById("video-background-cloud").style.display = "none";
        document.getElementById("video-background-rain").style.display = "none";
        document.getElementById("video-background-thunder").style.display = "none";
        document.getElementById("video-background-haze").style.display = "none";
        document.getElementById("video-background-clear").style.display = "none";
        
    }
    else if(weatherType.textContent == 'Smoke'){
        document.getElementById("video-background-smoke").style.display = "block";
        document.getElementById("video-background-default").style.display = "none";
        document.getElementById("video-background-cloud").style.display = "none";
        document.getElementById("video-background-rain").style.display = "none";
        document.getElementById("video-background-thunder").style.display = "none";
        document.getElementById("video-background-haze").style.display = "none";
        document.getElementById("video-background-clear").style.display = "none";
        
    }
    else  {document.getElementById("video-background-default").style.display = "block";
   
        document.getElementById("video-background-cloud").style.display = "none";
        document.getElementById("video-background-rain").style.display = "none";
        document.getElementById("video-background-thunder").style.display = "none";
        document.getElementById("video-background-haze").style.display = "none";
        document.getElementById("video-background-clear").style.display = "none";
        document.getElementById("video-background-smoke").style.display = "none";}
} 

function dateManage(dateArg){
    let days = ["Sunday", "Monday" , "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    let months = ["January" , "February" ,"March" ,"April" ,"May" ,"June" ,"July"
     ,"August" ,"September" ,"October" ,"November" ,"December"];

     let year = dateArg.getFullYear();
     let month = months[dateArg.getMonth()];
     let date = dateArg.getDate();
     let day = days[dateArg.getDay()];

     return `${date} ${month} (${day}), ${year}`;
}