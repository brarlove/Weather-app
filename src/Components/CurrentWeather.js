import React from "react";
import '../App.css';
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default class Weather extends React.Component {
    renderCurrentWeather() {
        let today = new Date().getDay();
        return (
            <div className="current-weather">
                <div className="current-location">
                    {this.props.city}, {this.props.country}
                    <div>
                        {week[today]}
                    </div>
                </div>
                <div className="current-temp">
                    {this.props.temperature ? this.props.temperature + '°F' : ''}
                </div>
                <div className="current-img">
                    <img src={this.props.condition} height="120" width="120" />
                </div>
            </div>
        );
    }
    render() {
        //console.log(this.props);
        return (
            <div>
                {this.props.city && this.props.country ? this.renderCurrentWeather() : ''}
            </div>
        );
    }
}