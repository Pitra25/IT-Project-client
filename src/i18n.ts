import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

// Ресурсы для переводов
const resources = {
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    },
};

// Инициализация i18next
i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en', // Язык, используемый, если перевод не найден
    interpolation: {
        escapeValue: false, // Не экранировать HTML-теги в переводах
    },
});

export default i18n;