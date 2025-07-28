import React from 'react';

const DisplayWeather = (props) => {
    const { data } = props;
    return (
        <div>
            {data.cod !== 404 ? (
            <div>
                <span>{data.name}, {data.sys.country}. Weather</span><br />
                <span>Time is: {new Date().toLocaleTimeString()}</span>
                <h3>Temperature: { Math.floor(data.main.temp - 273.15)}
                <sup>o</sup></h3>
                <h5>High</h5>
                <span>
                      {Math.floor(data.main.temp_max - 273.15)}
                </span>
                <h5>Low</h5>
                <span>
                      {Math.floor(data.main.temp_min - 273.15)}
                </span>
            </div>              
            ) : (
                <div className="maincard">
                  <h2>{data.message}</h2>
                </div>
              )}
        </div>
    )
}

export default DisplayWeather