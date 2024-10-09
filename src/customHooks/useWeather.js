import { useEffect, useState } from "react";

export const useWeather = (geo) => {
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Проверяем, есть ли geo и его свойства
        if (!geo || !geo.latitude || !geo.longitude) {
            setLoading(false); // Останавливаем загрузку, если нет координат
            return;
        }

        // console.log(geo.latitude);
        console.log(geo.latitude.toFixed(4));

        const fetchWeather = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${geo.latitude.toFixed(
                        4
                    )},${geo.longitude.toFixed(4)}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [geo]); // Зависимость от geo

    return { data, loading, error };
};
