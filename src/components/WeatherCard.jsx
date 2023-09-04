import { useState } from "react";

const WeatherCard = ({ weather, temp }) => {

  //  console.log(weather);

  const [isCelsius, setIsCelsius] = useState(true)
  
  const handleChangeTemp = () => setIsCelsius(!isCelsius)

  return (
    <article className="container">
      <h1 className="container_title">Weather App</h1>
      <h2 className="container_location">{weather?.name}, {weather?.sys.country}</h2>
      <div className="container_description">
        <div className="container_description_img">
          <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt={weather?.weather[0].description} />
        </div>
        <section className="container_description_weather">
          <h3>"{weather?.weather[0].description}"</h3>
          <ul>
            <li><span className="description_weather">Wind Speed</span> <span>{weather?.wind.speed} m/s</span></li>
            <li><span className="description_weather">Clouds</span> <span>{weather?.clouds.all} %</span></li>
            <li><span className="description_weather">Pressure</span> <span>{weather?.main.pressure} hPa</span></li>
          </ul>
        </section>
      </div>
      <h2 className="container_temp">{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>
      <button onClick={handleChangeTemp}>Change to {isCelsius ? '°F' : '°C'}</button>
    </article>
  )
}

export default WeatherCard