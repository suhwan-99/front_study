const weatherweat1 = document.querySelector('.weat');
const weathertemp1= document.querySelector('.tem');
const weatherfeel1 = document.querySelector('.feel');
function connectGeo(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  
  // 위도와 경도 뽑는 코드
  // console.log(position);
  console.log(`위도: ${lat} 경도: ${lon}`);
  //console.log(`체감온도: ${fel} 기온: ${temp} 날씨: ${weather}`);
  const APIKEY = `fc89e29a095e12fce49cc5b86f2e3226`;
  
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;
  fetch(URL)
  .then(response => response.json())          
  .then((data) => {
    console.log(data);
    const weathertemp = data.main.temp;
    const weatherfeel = data.main.feels_like;
    const weatherweat = data.weather[0].description;

    console.log(weathertemp);
    console.log(weatherfeel);
    console.log(weatherweat);

    weathertemp1.innerHTML = weathertemp;
    weatherfeel1.innerHTML = weatherfeel;
    weatherweat1.innerHTML = weatherweat; 

  })
}
function errorGeo() {
  alert('위치 정보 연결 실패');
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);
