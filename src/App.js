import React, { Component } from 'react';
import './App.css'
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import CurrentWeather from "./Components/CurrentWeather";
import ForecastWeather from "./Components/ForecastWeather";

const API_KEY = "9e862b5af0b74b668fd215149191101"

export default class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    feelsLike: undefined,
    condition: undefined,
    error: undefined,
    forecastday: [],
    render: false
  }
  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    if (city !== "" && city !== null) {
      const api_call = await fetch(`https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city},&days=5`)
      const data = await api_call.json();
      console.log(data);
      this.setState({
        temperature: data.current.temp_f,
        city: data.location.name,
        country: data.location.country,
        humidity: data.current.humidity,
        feelsLike: data.current.feelslike_f,
        condition: data.current.condition.icon,
        error: "",
        forecastday: data.forecast.forecastday,
        render: true
      });
    }
  }

  renderWeatherCard() {
    if (this.state.render) {
      return "weather-card"
    } else {
      return ""
    };
  }
  render() {
    console.log(this.renderWeatherCard())
    return (
      <div className="app-container">
        <Form getWeather={this.getWeather} />
        <div className={this.renderWeatherCard()}>
          <CurrentWeather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            feelsLike={this.state.feelsLike}
            condition={this.state.condition}
            error={this.state.error} />
          <ForecastWeather
            forecastday={this.state.forecastday} />
        </div>
      </div>
    );
  }
}

