import { type FC, useEffect } from 'react'
import { useTranslation } from "react-i18next"
import { useGetImages } from "@/hooks"
import Nav from "../Nav"
import { HeaderStyledWrapper } from './Header.styled.tsx'
import  icon_phone  from '../Pictures/icon-number_phone.png'
import  icon_email  from '../Pictures/icon-email.png'


const Header: FC = () => {
    const { t, i18n } = useTranslation()
    let urlImg = useGetImages('Logo.png')

    // When loading the application, check the saved language
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en'
        i18n.changeLanguage(savedLanguage)
        changeLanguage(savedLanguage, true)
    }, [i18n])

    const changeLanguage = (lng: string, reset: boolean = false) => {
        const enBtn: HTMLElement | null = document.getElementById('en')
        const ruBtn: HTMLElement | null = document.getElementById('ru')

        if (enBtn == null || ruBtn == null) return

        if (lng != '' && reset) {
            if (lng == 'en') enBtn.classList.add('active', 'left')
            if (lng == 'ru') ruBtn.classList.add('active', 'right')
            return
        }

        if (enBtn.classList.contains('active') ) {
            enBtn.classList.remove('active', 'left')
            ruBtn.classList.add('active', 'right')

            if (lng == 'en') lng = 'ru'

            i18n.changeLanguage(lng)
            localStorage.setItem('language', lng) // Save language selection
        } else {
            enBtn.classList.add('active', 'left')
            ruBtn.classList.remove('active', 'right')

            if (lng == 'ru') lng = 'en'

            i18n.changeLanguage(lng)
            localStorage.setItem('language', lng) // Save language selection
        }
    }

    return (
        <HeaderStyledWrapper>
            <div className="container">

                <div className='header_container'>
                    <div className='header_logo'>
                        <img src={urlImg} alt='logo IT Project'/>
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
                        <div className="contact_email">
                            <img src={icon_email} className="email_icon" alt="icon email"/>
                            <span>akorn@it-project.su</span>
                        </div>
                        <div className="contact_number_phone">
                            <img src={icon_phone} className="phone_icon" alt="icon number phone"/>
                            <span>+7(4842) 77-09-09</span>
                        </div>
                    </div>
                </div>

            </div>
        </HeaderStyledWrapper>
    )
}

export default Header
