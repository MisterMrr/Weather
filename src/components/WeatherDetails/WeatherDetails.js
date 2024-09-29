import React from "react";
import sprite from "../../assets/img/sprite.svg";

import style from "./WeatherDetails.module.css";

function WeatherDetails() {
    return (
        <>
            <aside className={style.weather__details}>
                <div className={style.location__wrapper}>
                    <input
                        type="text"
                        className={style.search}
                        placeholder="Enter location"
                    />
                    <button className={style.myGeo}>
                        <svg className={style.pin}>
                            <use href={`${sprite}#pin`}></use>
                        </svg>
                    </button>
                </div>
                <div className={style.location__list}>
                    <p className={style.location__list__town}>Tel Aviv</p>
                    <p className={style.location__list__town}>New York</p>
                    <p className={style.location__list__town}>Tokyo</p>
                    <p className={style.location__list__town}>Paris</p>
                </div>
                <div className={style.weather__details__container}>
                    <p className={style.weather__details__title}>
                        Weather details
                    </p>

                    <span className={style.country__wrapper}>
                        <p>Country</p>
                        <p>Tel Aviv</p>
                    </span>
                    <span className={style.humidity__wrapper}>
                        <p>Humidity</p>
                        <p>50%</p>
                    </span>
                    <span className={style.wind__wrapper}>
                        <p>Wind</p>
                        <p>7 km/h</p>
                    </span>
                    <span className={style.feels_like__wrapper}>
                        <p>Feels Like</p>
                        <p>7&deg;C</p>
                    </span>
                </div>
            </aside>
        </>
    );
}

export default WeatherDetails;
