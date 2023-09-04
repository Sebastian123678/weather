import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard';

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect (() => {
    const success = pos => {
      // console.log(pos); Imprime todo lo que trae la API del navegador
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    // API del navegador para saber la ubicacion
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    // Que no se ejecuta al cargar la pagina
    if (coords) {
      const ApiKey = 'b6bee9ec3b5e34c90df27c4e439d57db'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(1),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
          }
          setTemp(obj)
        })
        .catch(err => console.log(err))
    }
  }, [coords]) // cuando se modifica coords se ejecuta ese useEffect

  return (
    <div className='main'>
      <WeatherCard
        weather = {weather}
        temp = {temp}
      />
    </div>
  )
}

export default App
