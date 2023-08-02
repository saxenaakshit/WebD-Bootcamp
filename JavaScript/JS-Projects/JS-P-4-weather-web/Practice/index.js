const API_KEY = "8efc992a58c34885b10c1b57c7493154";

async function showWeather() {

    let city="srinagar";
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?&city=${city}&key=${API_KEY}&include=minutely`);

    const datu=await response.json();
   // console.log("Weather data:->" ${data});

    let newPara=document.createElement('p');
    newPara.textContent= `${datu.data[0].temp} °C`;
    document.body.appendChild(newPara);
}