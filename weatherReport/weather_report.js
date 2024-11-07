console.log("give me data of weather :-)");

function showweatherDetails(event) {
      event.preventDefault();

const city = document.getElementById('city').value;

const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  console.log("data : ")
  console.log(data);
  weatherInfo.innerHTML = `<h2>Data using name</h2>
                           <h2>Weather in ${data.name}</h2>
                           <p>Temperature: ${data.main.temp} &#8451;</p>
                           <p>Weather: ${data.weather[0].description}</p>`;
})
.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });


}
  
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

function showweatherDetails2(event) {
    event.preventDefault();

const lat = document.getElementById('latitude').value;

const lon = document.getElementById('longitude').value;

const apiKey2 = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key

const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`;

fetch(apiUrl2)
.then(response => response.json())
.then(data => {
const weatherInfo = document.getElementById('weatherInfo2');
console.log("data : ")
console.log(data);
weatherInfo.innerHTML = `<h2>Data using long. and lat.</h2>
                         <h2>Weather in ${data.name}</h2>
                         <p>Temperature: ${data.main.temp} &#8451;</p>
                         <p>Weather: ${data.weather[0].description}</p>`;
})
.catch(error => {
  console.error('Error fetching weather:', error);
  const weatherInfo = document.getElementById('weatherInfo2');
  weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
});


}
document.getElementById('coordinatesForm').addEventListener('submit',showweatherDetails2 );
