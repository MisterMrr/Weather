import { useState, useEffect } from "react";

export const useTime = () => {
    const [time, setTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [weekday, setWeekday] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const time = `${hours}:${minutes}`;

            const day = now.getDate();
            const month = now.toLocaleString("default", { month: "long" });
            const year = now.getFullYear();
            const currentDate = `${day} ${month} ${year}`;

            const weekday = now.toLocaleString("default", { weekday: "long" });

            setTime(time);
            setCurrentDate(currentDate);
            setWeekday(weekday);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return { time, currentDate, weekday };
};
