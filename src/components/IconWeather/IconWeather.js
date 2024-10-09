import React from "react";

import style from "./IconWeather.module.css";

import sprite from "../../assets/img/sprite.svg";

function IconWeather({ weatherCode }) {
    const getWeatherDescription = (code) => {
        switch (code) {
            case 1000:
                return "sun";
            case 1003:
                return "cloudlySun";
            case 1006:
                return "cloudly";
            case 1030:
                return "fog";

            case 1072:
                return "drizzle";
            case 1180:
            case 1183:
            case 1186:
            case 1189:
                return "rain";

            case 1210:
            case 1213:
            case 1216:
            case 1219:
            case 1222:
            case 1225:
                return "snow";

            case 1192:
            case 1195:
                return "rainfall";
            case 1273:
            case 1276:
                return "thunderstorm";
            default:
                return "unknown";
        }
    };

    return (
        <>
            <svg className={style.icon}>
                <use
                    href={`${sprite}#${getWeatherDescription(
                        weatherCode
                    )}`}></use>
            </svg>
        </>
    );
}

export default IconWeather;
