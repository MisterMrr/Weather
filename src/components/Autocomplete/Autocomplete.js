import React, { useState } from "react";

import style from "./Autocomplete.module.css";

import sprite from "../../assets/img/sprite.svg";

function Autocomplete({ onChangeCity }) {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // Список возможных вариантов (например, города)
    const items = [
        "Москва",
        "Нью Йорк",
        "Лондон",
        "Токио",
        "Париж",
        "Берлин",
        "Каспийск",
    ];

    // Функция обработки изменений в инпуте
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Фильтрация предложений в зависимости от ввода
        if (value) {
            const filteredSuggestions = items.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]); // Если нет ввода, предложений нет
        }
    };

    // Функция для обработки выбора варианта из предложений
    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion); // Устанавливаем выбранный вариант в инпут
        onChangeCity(suggestion);
        setSuggestions([]); // Очищаем предложения
    };

    // Функция для обработки нажатия клавиши
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onChangeCity(inputValue); // Передаем текущее значение инпута
            setSuggestions([]); // Очищаем предложения
        }
    };

    return (
        <>
            <div className={style.location__wrapper}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} // Обработка нажатия клавиши
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
                {/* Список предложений */}
                {suggestions.length > 0 && (
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <p
                                key={index}
                                onClick={() =>
                                    handleSuggestionClick(suggestion)
                                }
                                className={style.location__list__town}>
                                {suggestion}
                            </p>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default Autocomplete;
