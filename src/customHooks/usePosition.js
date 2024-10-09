import { useEffect, useState } from "react";

export const usePosition = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        const success = (pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition({ latitude, longitude });
        };

        const error = (err) => {
            console.error(err);
            setPosition(null); // В случае ошибки устанавливаем null
        };

        navigator.geolocation.getCurrentPosition(success, error);

        // Возвращаем очистку (если необходимо)
        return () => setPosition(null);
    }, []);

    return position;
};
