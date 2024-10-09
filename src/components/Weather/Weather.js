import React, { useEffect, useState } from "react";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import style from "./Weather.module.css";
import IconWeather from "../IconWeather/IconWeather";
import { useWeather } from "../../customHooks/useWeather";
import { usePosition } from "../../customHooks/usePosition";
import { useTime } from "../../customHooks/useTime";

function Weather() {
    const cityApiKey = process.env.REACT_APP_CITY_API_KEY;
    console.log(cityApiKey); // выводит ключ на консоль
    const geo = usePosition(); // Получаем координаты пользователя
    const [cityCoord, setCityCoord] = useState(null);
    const { data, loading, error } = useWeather(cityCoord); // Используем хук для запроса погоды
    const { time, currentDate, weekday } = useTime();

    // Эффект для установки начальных координат
    useEffect(() => {
        if (geo && geo.latitude && geo.longitude) {
            // Если есть координаты пользователя, устанавливаем их в cityCoord
            setCityCoord({
                latitude: parseFloat(geo.latitude),
                longitude: parseFloat(geo.longitude),
            });
            console.log(cityCoord);
        }
    }, [geo]); // Запускаем при изменении geo

    // Обработка загрузки и ошибок
    if (loading) return <div>Loading weather data...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Функция для изменения города
    const onChangeCity = async function (city) {
        console.log("Выбранный город:", city);
        try {
            const response = await fetch(
                `https://geocode-maps.yandex.ru/1.x/?apikey=${cityApiKey}&geocode=${city}&format=json`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            const pos =
                result.response.GeoObjectCollection.featureMember[0].GeoObject
                    .Point.pos;
            let [longitude, latitude] = pos.split(" "); // Координаты приходят в формате "долгота широта"
            longitude = parseFloat(longitude);
            latitude = parseFloat(latitude);
            // Устанавливаем координаты в состояние
            setCityCoord({ latitude, longitude });
            // console.log({ latitude, longitude });
        } catch (err) {
            console.log("Ошибка при получении координат города:", err.message);
        }
    };

    return (
        <>
            <div className={style.weather__container}>
                <p className={style.temperature}>
                    {data?.current ? `${data.current.temp_c}°C` : "Loading"}
                </p>

                <div className={style.timeLocation__container}>
                    <p className={style.current_location}>
                        {data?.location ? data.location.name : "Loading..."}
                    </p>
                    <div className={style.data__wrapper}>
                        <p className={style.time}>
                            {time} - {weekday},
                        </p>
                        <p className={style.data}>{currentDate}</p>
                    </div>
                </div>

                {data?.current ? (
                    <IconWeather weatherCode={data.current.condition.code} />
                ) : (
                    "Loading..."
                )}
            </div>

            {data?.current ? (
                <WeatherDetails
                    humidity={data.current.humidity}
                    feels={data.current.feelslike_c}
                    wind={data.current.wind_kph}
                    city={data.location.name}
                    onChangeCity={onChangeCity}
                />
            ) : (
                <p>Loading weather details...</p>
            )}
        </>
    );
}

export default Weather;
