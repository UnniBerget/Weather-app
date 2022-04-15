import React from "react";
import WeatherIcon from "WeatherIcons";

export default function WeatherForecast () {
    return <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thur</div>
                
                <WeatherIcon code="01d" />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperatures-max">
                    19
                    </span>
                    <span className="WeatherForecast-temperatures-min">
                    10
                    </span>
                
                        </div>

            </div>

        </div>


    </div>
}
