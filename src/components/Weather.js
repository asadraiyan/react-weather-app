import React from 'react'
import { TiWeatherDownpour } from 'react-icons/ti';
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiBarometer } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { BsWind } from 'react-icons/bs';

const Weather = () => {
    return (
        <div className='main-container'>
            <h1 className='heading'>weather app</h1>
            <div className="container">
                <input className='search' type="search" placeholder='Enter a city name' autoComplete='off' />
                <TiWeatherDownpour className='weather-icon' />
                <h2 className='city-name'>Lucknow</h2>
                <div className="weather-props">
                    <div className="temp-press">
                        <FaTemperatureHigh className='icons' />
                        <span className='font'>Temp : 38°C</span>
                        <WiHumidity className='icons' />
                        <span className='font'>Humidity : 79</span>
                    </div>
                    <div className="humidity-wind">
                        <WiBarometer className='icons' />
                        <span className='font'>pressure : 1003</span>
                        <BsWind className='icons' />
                        <span className='font'>wind : 3.6</span>

                    </div>
                </div>




            </div>
        </div >
    )
}

export default Weather
