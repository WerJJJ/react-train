import React from 'react';
import "../../App.css";

function WeatherCard(props) {
    return (
        <div className="weather">
            <div className="weather__basic">
                <span className="weather__picture"></span>
                <span className="weather__temperature">45</span>
            </div>
            <div>
                <span className="weather__description">Cloudy</span>
            </div>
            <div className="weather__humidity-content">
                <span className="weather__humidity">Влажность: 82%</span>
            </div>
            <div>
                <span className="weather__wind-speed">Ветер: 12 км/ч</span>
            </div>
        </div>
    );
}

export default WeatherCard;