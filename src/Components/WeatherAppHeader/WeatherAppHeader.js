import React from "react";
import "../../App.css";

function WeatherAppHeader(props) {
    return (
        <div className="weather-app__header">
            <h1>{props.title}</h1>
        </div>
    );
}

export default WeatherAppHeader;