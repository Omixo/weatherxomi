const apiKey = '3127400097a172151286347cd972595d';

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const weatherResult = document.getElementById('weatherResult');

  if (!city) {
    weatherResult.textContent = 'Please enter a city name.';
    return;
  }

  try {
    weatherResult.textContent = 'Loading...';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found or API error');
    }

    const data = await response.json();

    const weatherMain = data.weather[0].main.toLowerCase();
    const weatherDesc = data.weather[0].description.toLowerCase();
    const temp = data.main.temp;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherResult.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="${icon}" alt="${weatherDesc}" />
      <p>${weatherDesc}</p>
      <p>Temperature: ${temp.toFixed(1)} °C</p>
    `;

    playWeatherSound(weatherMain, weatherDesc);
  } catch (err) {
    weatherResult.textContent = err.message;
    stopAllSounds();
  }
}

// Play sound based on weather condition
function playWeatherSound(main, desc) {
  stopAllSounds();

  if (desc.includes('rain') || main.includes('rain')) {
    document.getElementById('rainSound').play().catch(() => {});
  } else if (desc.includes('clear') || main.includes('clear')) {
    document.getElementById('sunnySound').play().catch(() => {});
  } else if (desc.includes('snow') || desc.includes('cold') || main.includes('snow')) {
    document.getElementById('coldSound').play().catch(() => {});
  }
}

function stopAllSounds() {
  ['rainSound', 'sunnySound', 'coldSound'].forEach(id => {
    const audio = document.getElementById(id);
    audio.pause();
    audio.currentTime = 0;
  });
}
