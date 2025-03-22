import { type FC, useEffect } from 'react'
import { useTranslation } from "react-i18next";

import { HeaderStyledWrapper } from './Header.styled.tsx'
import Nav from "../Nav";

const Header: FC = () => {
    const { t, i18n } = useTranslation();

    // При загрузке приложения проверяем сохраненный язык
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, [i18n])

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); // Сохраняем выбор языка
    }

    return (
        <HeaderStyledWrapper>
            <h1 className="heading">{t('title_name')}</h1>
            <Nav/>
            <div>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('ru')}>Русский</button>
            </div>
        </HeaderStyledWrapper>
    )
}

export default Header
