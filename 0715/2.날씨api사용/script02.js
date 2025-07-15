const h1 = document.querySelector('h1');
const h4 = document.querySelector('h4');
const h3 = document.querySelector('h3');
const p = document.querySelector('p');
const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국:{
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};
const selectBox = document.querySelector('select');
selectBox.addEventListener('change', () => {
  const country = selectBox.value;
  const countrylat = countryCoordinates[country].latitude;
  const countrylon = countryCoordinates[country].longitude;
  const APIKEY = `fc89e29a095e12fce49cc5b86f2e3226`;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${countrylat}&lon=${countrylon}&appid=${APIKEY}&units=metric&lang=kr`;
  
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    const ctyTemp = data.main.temp;
    const ctyWeather = data.weather[0].description;
    const ctyWind = data.wind.speed;
    const name = data.name;

    console.log(ctyTemp);
    console.log(ctyWeather);
    console.log(ctyWind);
    console.log(name);

    h1.innerHTML = name;
    h4.innerHTML = ctyTemp;
    p.innerHTML = ctyWeather;
    h3.innerHTML = ctyWind;
  })
});
