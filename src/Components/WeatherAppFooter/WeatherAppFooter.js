import React from "react";
import "../../App.css";

function WeatherAppFooter(props) {
    return (
        <div className="weather-app__footer">
            <h1>{props.title}</h1>
        </div>
    );
}

export default WeatherAppFooter;
