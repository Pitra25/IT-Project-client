import { type FC, useEffect } from 'react'
import { useTranslation } from "react-i18next"
import { useGetImages } from "@/hooks"
import Nav from "../Nav"
import { HeaderStyledWrapper } from './Header.styled.tsx'

const Header: FC = () => {
    const { t, i18n } = useTranslation()
    let urlImg  = useGetImages('Logo.png')

    // When loading the application, check the saved language
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en'
        i18n.changeLanguage(savedLanguage)
    }, [i18n])

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('language', lng) // Save language selection
        btnActive()
    }

    const btnActive = () => {
        const enBtn: HTMLElement | null = document.getElementById('en')
        const RruBtn: HTMLElement | null = document.getElementById('ru')

        if (enBtn == null) return
        if (RruBtn == null) return

        // const classEn: string = 'active, right'
        // const classRu: string = 'active, left'

        if (enBtn.classList.contains('active') ){
            enBtn.classList.remove('active', 'left')
            RruBtn.classList.add('active', 'right')
        } else {
            enBtn.classList.add('active', 'left')
            RruBtn.classList.remove('active', 'right')
        }
    }

    return (
        <HeaderStyledWrapper>
            <div className='header_container'>
                <div className='header_logo'>
                    <img src={urlImg} alt=""/>
                </div>

                <div className='header_heading'>
                    <span>{t('title_name.part1')}<b>{t('title_name.part2')}</b></span>
                    <span>{t('subtitle_name.part1')}</span>
                    <span>{t('subtitle_name.part2')}</span>
                </div>
            </div>

            <div className='nav'>
                <Nav/>
            </div>

            <div className='container_contacts_language'>
                <div className='language'>
                    <button id='en' onClick={() => changeLanguage('en')}>EN</button>
                    <button id='ru' onClick={() => changeLanguage('ru')}>RU</button>
                </div>

                <div className='contact'>
                    <span>number:</span>
                    <span>email:</span>
                </div>
            </div>
        </HeaderStyledWrapper>
    )
}

export default Header
