import React from 'react'

const DegreeToggle = ({degreeType, updateForecastDegree}) => {
    return (
        <React.Fragment>
            <div className="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name="degree-type"
                    id="celsius"
                    value="celsius"
                    checked={degreeType === "celsius"}
                    onChange={updateForecastDegree}/>
                <label class="form-check-label" for="celsius">celsius</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name="degree-type"
                    id="fahrenheit"
                    value="fahrenheit"
                    checked={degreeType === "fahrenheit"}
                    onChange={updateForecastDegree}/>
                <label className="form-check-label" for="fahrenheit">fahrenheit</label>
            </div>
        </React.Fragment>
    )
}

export default DegreeToggle;