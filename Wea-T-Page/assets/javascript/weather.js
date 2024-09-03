var search = document.querySelector('#search-box');
var searchBtn = document.querySelector('#search-btn');
var locationText = document.querySelector('.location-text');
var tempText = document.querySelector('.temp-text');
var weatherStatus = document.querySelector('.weather-status');
var utcTime = document.querySelector('.info-time');
var windSpeed = document.querySelector('.info-wind-speed');
var humidity = document.querySelector('.info-humidity');
var visibility = document.querySelector('.info-visibility');

async function changeWeatherUI() {
  let capitalSearch = search.value.trim();
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=fc741bf6700fe5bf89478157cf433aeb
`

  let data  = await fetch(apiURL).then(res => res.json())
  if(data.cod = 200) {
    console.log('data weather', data);
    locationText.innerText = data.name + ', ' + data.sys.country;
    tempText.innerText = (data.main.temp - 273.15).toFixed(1) + ' °C';
    weatherStatus.innerText = data.weather[0].description;
    windSpeed.innerText = '💨 Gió : ' + data.wind.speed + ' m/s'
    humidity.innerText = '💧 Độ ẩm: ' + data.main.humidity  + '%'
    visibility.innerText = '👁 Tầm nhìn: ' + data.visibility + 'm'
  } else {
  
  }
}

changeWeatherUI()

async function dateUI() {
  const timeUTC = new Date();
  const day =  timeUTC.getDate();
  const month = timeUTC.getMonth() + 1;
  const year = timeUTC.getFullYear();
  var realTime = (`${day} / ${month} / ${year}`);
  utcTime.innerText = realTime;
};

dateUI()

search.addEventListener('keypress', function(e){
  if(e.code === 'Enter') {
    changeWeatherUI()
  }
});

function touchBtn() {
  if(search) {
    changeWeatherUI()
  }
}
