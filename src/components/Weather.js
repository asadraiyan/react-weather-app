import React, { useEffect, useState } from 'react'
import { TiWeatherDownpour } from 'react-icons/ti';
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiBarometer } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { BsWind } from 'react-icons/bs';

const Weather = () => {
  const [city, setCity] = useState("")
  const [search, setSearch] = useState("Lucknow")
  const [temp, setTemp] = useState(0)
  const [humidity, setHumdity] = useState(0)
  const [pressure, setPressure] = useState(0)
  const [wind, setWind] = useState(0)

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5255240a6a92d92cfd72d46bcdc8d294`;
      const response = await fetch(url)
      const resJson = await response.json()
      // console.log(resJson)
      setTemp(resJson?.main?.temp)
      setPressure(resJson?.main?.pressure)
      setHumdity(resJson?.main?.humidity)
      setWind(resJson?.wind?.speed)
      setCity(resJson.name ? resJson.name : "")
    }
    fetchApi()
  }, [search])
  return (
    <div className='main-container'>

      <div className="container">
        <h1 className='heading'>Weather app !</h1>
        <input className='search'
          type="search" onChange={(event) => {
            setSearch(event.target.value)
          }}
          placeholder='Enter a city name'
          autoComplete='off'
        />
        <TiWeatherDownpour className='weather-icon' />

        {
          !city ? (
            <p className='invalid'>Invalid city name</p>
          ) : (
            <>
              <h1 className='city-name'>{search}</h1>
              <div className="weather-props">
                <div className="temp-press">
                  <FaTemperatureHigh className='icons' />
                  <span className='font'>Temp : {temp} °C</span>
                  <WiHumidity className='icons' />
                  <span className='font'>Humidity : {humidity} %</span>
                </div>
                <div className="humidity-wind">
                  <WiBarometer className='icons' />
                  <span className='font'>Pressure : {pressure} mbar</span>
                  <BsWind className='icons' />
                  <span className='font'>Wind : {wind} mph</span>

                </div>
              </div>
            </>
          )
        }





      </div>
    </div >
  )
}

export default Weather
