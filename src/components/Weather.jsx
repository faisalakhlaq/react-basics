import React from 'react';
import { useState } from 'react'

import Button from './Button'
import DisplayWeather from './DisplayWeather'

const Weather = () => {
    const openweathermapKEY = '1cae1a9e9f9d49bc6167eb6b89ca6c24';
    const [form, setForm] = useState({
        city: '',
        country: '',
    })
    const [weather, setWeather] = useState([])
    async function fetchWeatherData(e){
        e.preventDefault();
        if (form.city === '' | form.country === ''){
            alert('Please provide city and country');
        } else {
            const url = "https://api.openweathermap.org/data/2.5/weather?q="+form.city+','+form.country+'&appid='+openweathermapKEY
            const data = await fetch(url)
            .then((res) => res.json())
            .then((data) => data);
    
          setWeather({ data: data });
        }
    }

    const handleChange = (e) => {
        let n = e.target.name;
        let v = e.target.value;

        if(n === 'city'){
            setForm({ ...form, city: v });
        }
        if(n === 'country'){
            setForm({ ...form, country: v });
        }
    };
    return (
        <div className='container'>
            <h1>Weather App</h1>
            <br />
            <form className='add-form'>
                <div className='form-control'>
                    <label>City</label>
                    <input 
                    type='text' 
                    name='city' 
                    placeholder='City'
                    onChange={(e) => handleChange(e)} 
                    />
                </div>
                <div className='form-control'>
                    <label>Country</label>
                    <input 
                    type='text'
                    name='country' 
                    placeholder='Country'
                    onChange={(e) => handleChange(e)} 
                    />
                </div>                
                <Button 
                    color={'green'} 
                    text={ 'Submit' }
                    onClick={(e) => fetchWeatherData(e)} 
                    />
            </form>
            {weather.data !== undefined ? (
                <div><DisplayWeather data={weather.data} /></div>
            ) : null }
        </div>
    );
}

export default Weather