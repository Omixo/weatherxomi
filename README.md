# WeatherXomi 🌤️

A simple **Weather App** built with **HTML**, **CSS**, and **JavaScript** that fetches real-time weather data from the OpenWeather API. It also plays weather-related sounds to make the experience more immersive!

---

## Demo

Type a city name and click **Get Weather** to see the current weather and hear matching weather sounds (rain, sunny, cold).

---

## Features

- Fetches weather data from the OpenWeather API using city name.
- Displays city name, weather description, temperature, and an icon.
- Plays background sounds based on weather conditions:
  - Rain sound if raining
  - Sunny sound if clear weather
  - Wind sound if cold/snowy weather
- Simple and clean UI with smooth animations.
- Responsive and works on desktop and mobile.

---

## How It Works

1. **User Input:** Enter a city name and click "Get Weather".
2. **Fetch API:** The app sends a request to OpenWeather's API with your city and API key.
3. **Response:** If successful, it receives weather data including temperature, weather type, and icon.
4. **Display:** The app updates the page with this information.
5. **Sound:** Based on the weather type, the app plays a related sound (rain, sun, or cold).
6. **Error Handling:** If the city isn't found or API key is invalid, an error message is shown.

---

## Files

- `index.html` — Main HTML file containing the app layout and audio elements.
- `style.css` — CSS file for styling the app with animations.
- `script.js` — JavaScript file that handles fetching weather data, updating the UI, and controlling sounds.

---

## Setup & Usage

1. **Clone or download** this repository.
2. Open `index.html` in any modern browser.
3. Type a city name and click **Get Weather**.
4. See the weather results and hear the sounds!

---

## API Key

- This app uses the free OpenWeather API.
- The API key is hardcoded in `script.js` for simplicity.
- You can get your own API key for free at [https://openweathermap.org/api](https://openweathermap.org/api).
- Replace the API key in `script.js` with your own for extended use.

---

## Notes for Beginners

- This project uses **vanilla JavaScript** (no frameworks).
- It uses `fetch()` for making network requests.
- Audio playback is controlled with HTML5 `<audio>` elements and JavaScript.
- The app includes basic error handling for wrong city names or network issues.
- This is a great starting project to learn working with APIs, DOM manipulation, and multimedia on the web.

---

## Future Improvements

- Add loading spinners during API calls.
- Add more weather sounds for different weather types.
- Make the UI mobile-friendly with responsive design.
- Store last searched city for quick access.
- Add a 5-day weather forecast.

---

## Contact

If you want to learn more or have questions, feel free to reach out!

---

**Happy Coding!** 🚀
