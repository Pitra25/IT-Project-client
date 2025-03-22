import styled from 'styled-components'

export const DropdownWrapper = styled.div`
    /* Контейнер для выпадающего списка */
    position: relative;
    width: 200px;
    font-family: Arial, sans-serif;


    /* Стили для элемента <select> */
    .dropdown-select {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 2px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        appearance: none; /* Убираем стандартный стиль браузера */
        cursor: pointer;
    }

    /* Стили для <select> при наведении */
    .dropdown-select:hover {
        border-color: #888;
    }

    /* Стили для <select> при фокусе */
    .dropdown-select:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    /* Стили для опций */
    .dropdown-select option {
        padding: 10px;
        background-color: #fff;
        color: #333;
    }

    /* Стили для опций при наведении */
    .dropdown-select option:hover {
        background-color: #f0f0f0;
    }

    /* Добавляем кастомную стрелку */
    .dropdown-container::after {
        content: '▼';
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        pointer-events: none; /* Чтобы клик проходил через иконку */
        color: #888;
    }
`