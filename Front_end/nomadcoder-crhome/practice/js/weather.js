const API_KEY = "9183df3fca5346d00441435775e52311"

function onGeoOk(position) { //그냥 position 값만 열어주면 알아서 주니깐ㅠㅠ
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(Response => Response.json()
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
  
    }));
    //url로 갈 필요 없이 javascript가 원격->지역 저장소로 옮김
    //서버에 request 했을 때 응답하는데 시간이 걸리므로, promise와 비슷
    //then method를 넣어 값을 받았을 때 기능을 하도록 함
    //바로 해버리면 fetch 되기 전에 기능을 하게 됨
    //coordinate -> 좌표


}

function onGeoError () {
    alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
