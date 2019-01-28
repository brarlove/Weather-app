import React from "react";

export default class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="Enter location.."></input>
                    <button className='search-btn' type='submit'>
                        <i className="fa fa-search class"></i>
                    </button>
                </form>
            </div>
        );
    }
}