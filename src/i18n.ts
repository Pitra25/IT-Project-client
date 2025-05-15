import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationRu }from './locales/ru'
import { translationEn } from "./locales/en"

// Translation resources
const resources = {
    en_US: {
        translation: translationEn
    },
    ru_RU: {
        translation: translationRu
    },
}

// Initialization i18next
i18n.use(initReactI18next).init({
    resources,
    lng: 'ru_RU', // Default language
    fallbackLng: 'en_US', // Language to use if translation is not found
    interpolation: {
        escapeValue: false, // Do not escape HTML tags in translations
    },
})

export default i18n;