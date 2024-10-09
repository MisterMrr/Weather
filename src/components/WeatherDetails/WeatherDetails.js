import React from "react";

import style from "./WeatherDetails.module.css";
import Autocomplete from "../Autocomplete/Autocomplete";

function WeatherDetails({ humidity, feels, wind, city, onChangeCity }) {
    return (
        <>
            <aside className={style.weather__details}>
                <Autocomplete onChangeCity={onChangeCity} />

                <div className={style.weather__details__container}>
                    <p className={style.weather__details__title}>
                        Weather details
                    </p>

                    <span className={style.country__wrapper}>
                        <p>City</p>
                        <p>{city}</p>
                    </span>
                    <span className={style.humidity__wrapper}>
                        <p>Humidity</p>
                        <p>{humidity}%</p>
                    </span>
                    <span className={style.wind__wrapper}>
                        <p>Wind</p>
                        <p>{Math.round((wind / 3.6) * 10) / 10} m/s</p>
                    </span>
                    <span className={style.feels_like__wrapper}>
                        <p>Feels Like</p>
                        <p>{feels}&deg;C</p>
                    </span>
                </div>
            </aside>
        </>
    );
}

export default WeatherDetails;
