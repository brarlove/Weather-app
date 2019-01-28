import React from "react";
import '../App.css';    
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default class ForcastWeather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    getForecastWeather() {
        if (this.props && this.props.forecastday) {
            const dates = this.props.forecastday.slice(1).map((item, i = 1) => {
                return (
                    <div key={i} className="forecastDays">
                        <div className="days">
                            {week[new Date(item.date_epoch * 1000 ).getDay()]}
                        </div>
                        <div className="condition">
                            <img src={item.day.condition.icon} />
                        </div>
                        <div className="max-temp">
                            {item.day.maxtemp_f ? item.day.maxtemp_f + "°F" : ''}
                        </div>
                        <div className="min-temp">
                            {item.day.mintemp_f ? item.day.mintemp_f + "°F" : ''}
                        </div>
                    </div>
                )
            }
            );
            return dates;
        }
    }
    render() {
        return (
            <div className="forecastContainer">
                {this.getForecastWeather()}
            </div>
        )
    }
}