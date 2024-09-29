import React from "react";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

import sprite from "../../assets/img/sprite.svg";

import style from "./Weather.module.css";

function Weather() {
    return (
        <>
            <div className={style.weather__container}>
                <p className={style.temperature}>27&deg;C</p>

                <div className={style.timeLocation__container}>
                    <p className={style.current_location}>Tel Aviv</p>
                    <div className={style.data__wrapper}>
                        <p className={style.time}>16:37 - tuesday,</p>
                        <p className={style.data}>5 Oct. 2021</p>
                    </div>
                </div>

                <svg className={style.icon_cloud}>
                    <use href={`${sprite}#cloud`}></use>
                </svg>
            </div>

            <WeatherDetails />
        </>
    );
}

export default Weather;
