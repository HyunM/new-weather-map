import React from 'react';
import apiConfig from '../apiKeys'
import Daycard from './Daycard'
import DegreeToggle from './DegreeToggle'
let x = 0;
class WeekContainer extends React.Component {
    state = {
        fullData: [],
        dailyData: [],
        degreeType: "fahrenheit",
    }

    updateForecastDegree = event => {
        this.setState({
            degreeType: event.target.value
        }, () => console.log(this.state))
    }

    componentDidMount = () => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?id=5323810&units=imperial&APPID=${apiConfig.owmKey}`;

        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                // const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
                const dailyData = data.list.filter(function (reading) { return reading.dt_txt.includes("18:00:00") });
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
            })
    }


    formatDayCards = () => {
        return this.state.dailyData.map((reading, degreeType, index) => <Daycard reading={reading} degreeType={this.state.degreeType} key={x++} />)
    }


    render() {
        return (
            <div className="container" align="center">
                <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
                <h5 className="display-5 text-muted">Anaheim,CA US</h5>
                <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree.bind(this)} />
                <div className="row justify-content-center">
                    {this.formatDayCards()}
                </div>
            </div>
        );
    }
}

export default WeekContainer;