import { type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { pathsConfig } from '@/pathsConfig'

import { NavStyledWrapper, DropdownWrapper, DropdownWrapperNested } from './Nav.styled.tsx'

const Nav: FC = () => {
    const loc = useLocation()
    const locName = loc.pathname.split('/')[1]
    const { t } = useTranslation()

    const cluster_link = 'nav.header.cluster.content'
    const services_link = 'nav.header.services.content'

    const BurgerActive = () => {
        const burger = document.getElementById('burger')
        const menu_list = document.getElementById('menu-list')
        if (burger == null || menu_list == null) return
        burger.classList.toggle('active')
        menu_list.classList.toggle('active_menu')
    }

    return (
        <NavStyledWrapper>
            <button id='burger' className="burger" onClick={BurgerActive}></button>

            <div id='menu-list' className="menu-list">
                <Link to={pathsConfig.home} className={`link fontSize ${locName === '' ? 'active' : ''}`}
                      data-type='hom'>
                    <div className='content'>
                        {t('nav.header.hom')}
                    </div>
                </Link>

                <DropdownWrapper>
                    <div className="dropdown">
                        <div className="dropbtn fontSize">{t('nav.header.cluster.title')}</div>
                        <div className="dropdown-content">
                            <Link to={pathsConfig.cluster} className={`link fontSize ${locName === 'cluster' ? 'active' : ''}`}
                                  data-type='cluster'>
                                <div className='content'>
                                    {t(cluster_link + '.link_1')}
                                </div>
                            </Link>

                            <Link to={pathsConfig.cluster} className={`link fontSize ${locName === 'cluster' ? 'active' : ''}`}
                                  data-type='cluster'>
                                <div className='content'>
                                    {t(cluster_link + '.link_2')}
                                </div>
                            </Link>
                        </div>
                    </div>
                </DropdownWrapper>

                <DropdownWrapper>
                    <div className="dropdown">
                        <div className="dropbtn fontSize">{t('nav.header.services.title')}</div>
                        <div className="dropdown-content">
                            <Link to={pathsConfig.services} className={`link fontSize ${locName === 'services' ? 'active' : ''}`}
                                  data-type='services'>
                                <div className='content'>
                                    {t(services_link + '.link_1')}
                                </div>
                            </Link>
                            <Link to={pathsConfig.services} className={`link fontSize ${locName === 'services' ? 'active' : ''}`}
                                  data-type='services'>
                                <div className='content'>
                                    {t(services_link + '.link_2')}
                                </div>
                            </Link>
                            <Link to={pathsConfig.services} className={`link fontSize ${locName === 'services' ? 'active' : ''}`}
                                  data-type='services'>
                                <div className='content'>
                                    {t(services_link + '.link_3')}
                                </div>
                            </Link>
                            <DropdownWrapperNested>
                                <div className="dropdown-nested">
                                    <div className="dropbtn-nested fontSize">{t('nav.header.services.content.link_4.title')}</div>
                                    <div className="dropdown-content-nested">
                                        <Link to={pathsConfig.services} className={`link fontSize ${locName === 'services' ? 'active' : ''}`}
                                              data-type='services'>
                                            <div className='content-nested'>
                                                {t(services_link + '.link_4.content.link_4_1')}
                                            </div>
                                        </Link>

                                        <Link to={pathsConfig.services} className={`link fontSize ${locName === 'services' ? 'active' : ''}`}
                                              data-type='services'>
                                            <div className='content-nested'>
                                                {t(services_link + '.link_4.content.link_4_2')}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </DropdownWrapperNested>
                        </div>
                    </div>
                </DropdownWrapper>

                <Link to={pathsConfig.contacts} className={`link fontSize ${locName === 'contacts' ? 'active' : ''}`}
                    data-type='contacts'>
                    <div className='content'>
                        {t('nav.header.Contact')}
                    </div>
                </Link>

                <Link to={pathsConfig.home} className={`link fontSize ${locName === '' ? 'active' : ''}`}
                    data-type='Feedback'>
                    <div className='content'>
                        {t('nav.header.Feedback')}
                    </div>
                </Link>

            </div>
        </NavStyledWrapper>
    )
}

export default Nav
