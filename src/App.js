import React from 'react';
import './App.css';
import WeatherAppContainer from "./Components/WeatherAppContainer/WeatherAppContainer";
import WeatherAppHeader from "./Components/WeatherAppHeader/WeatherAppHeader";
import WeatherAppFooter from "./Components/WeatherAppFooter/WeatherAppFooter";

function App() {
  return (
    <div className="App">
        <WeatherAppHeader title="Weather Helper Application"/>
        <WeatherAppContainer title="Weather in <<TOWN>>"/>
        <WeatherAppFooter title="Footer" />
    </div>
  );
}

export default App;
