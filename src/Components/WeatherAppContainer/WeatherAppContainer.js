import React from 'react';
import "../../App.css";
import WeatherCard from "../WeatherCard/WeatherCard";

function WeatherAppContainer(props) {
    return (
        <div className="weather-app__container">
            <div class="weather-app__container-title">{props.title}</div>
            <WeatherCard />
        </div>
    )
}

export default WeatherAppContainer