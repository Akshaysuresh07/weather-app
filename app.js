const apikey = "key";
const apiurl = ""
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherimg=document.querySelector(".weather img");

async function find_weather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

if(response.status == 404) {
    document.querySelector(".error").style.display = "block";
}

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".temp-hum").innerText = data.main.humidity + "%";
    document.querySelector(".temp-wind").innerText = data.wind.speed + "km/hr";
    document.querySelector(".climate").style.display="block";
    // document.querySelector(".container").style.="none";


    if(data.weather[0].main == "Clear") {
        weatherimg.src = "/images/clear.png";
        
    } 
    else if(data.weather[0].main == "Clouds") {
        weatherimg.src = "/images/clouds.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherimg.src = "/images/rain.png";
    }
    else if(data.weather[0].main == "Snow") {
        weatherimg.src = "/images/snow.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherimg.src = "/images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherimg.src = "/images/drizzle.png";
    }
}

searchbtn.addEventListener("click", () => {
    find_weather(searchbox.value);
});


// if(document.querySelector(".city").innerText = data.name)
