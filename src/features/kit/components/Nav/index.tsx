import { type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useTranslation} from "react-i18next";
import { pathsConfig } from '@/pathsConfig'

import { NavStyledWrapper, DropdownWrapper, DropdownWrapperNested } from './Nav.styled.tsx'

const Nav: FC = () => {
    const loc = useLocation()
    const locName = loc.pathname.split('/')[1]
    const { t } = useTranslation()

    return (
        <NavStyledWrapper>
            <Link to={pathsConfig.hom} className={`link ${locName === '' ? 'active' : ''}`}
                data-type='hom'>
                <div className='content'>
                    {t('nav.header.hom')}
                </div>
            </Link>

            <DropdownWrapper>
                <div className="dropdown">
                    <button className="dropbtn">{t('nav.header.cluster.title')}</button>
                    <div className="dropdown-content">
                        <Link to={pathsConfig.cluster} className={`link ${locName === 'cluster' ? 'active' : ''}`}
                              data-type='cluster'>
                            <div className='content'>
                                {t('nav.header.cluster.content.link_1')}
                            </div>
                        </Link>

                        <Link to={pathsConfig.cluster} className={`link ${locName === 'cluster' ? 'active' : ''}`}
                              data-type='cluster'>
                            <div className='content'>
                                {t('nav.header.cluster.content.link_2')}
                            </div>
                        </Link>
                    </div>
                </div>
            </DropdownWrapper>

            <DropdownWrapper>
                <div className="dropdown">
                    <button className="dropbtn">{t('nav.header.cluster.title')}</button>
                    <div className="dropdown-content">
                        <Link to={pathsConfig.services} className={`link ${locName === 'services' ? 'active' : ''}`}
                              data-type='services'>
                            <div className='content'>
                                {t('nav.header.services.content.link_1')}
                            </div>
                        </Link>
                        <Link to={pathsConfig.services} className={`link ${locName === 'services' ? 'active' : ''}`}
                              data-type='services'>
                            <div className='content'>
                                {t('nav.header.services.content.link_2')}
                            </div>
                        </Link>
                        <Link to={pathsConfig.services} className={`link ${locName === 'services' ? 'active' : ''}`}
                              data-type='services'>
                            <div className='content'>
                                {t('nav.header.services.content.link_3')}
                            </div>
                        </Link>
                        <DropdownWrapperNested>
                            <div className="dropdown-nested">
                                <button className="dropbtn-nested">{t('nav.header.services.content.link_4.title')}</button>
                                <div className="dropdown-content-nested">
                                    <Link to={pathsConfig.services} className={`link ${locName === 'services' ? 'active' : ''}`}
                                          data-type='services'>
                                        <div className='content-nested'>
                                            {t('nav.header.services.content.link_4.content.link_4_1')}
                                        </div>
                                    </Link>

                                    <Link to={pathsConfig.services} className={`link ${locName === 'services' ? 'active' : ''}`}
                                          data-type='services'>
                                        <div className='content-nested'>
                                            {t('nav.header.services.content.link_4.content.link_4_2')}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </DropdownWrapperNested>
                    </div>
                </div>
            </DropdownWrapper>

            <Link to={pathsConfig.contacts} className={`link ${locName === 'contacts' ? 'active' : ''}`}
                data-type='contacts'>
                <div className='content'>
                    {t('nav.header.Contact')}
                </div>
            </Link>

            <Link to={pathsConfig.hom} className={`link ${locName === '' ? 'active' : ''}`}
                data-type='Feedback'>
                <div className='content'>
                    {t('nav.header.Feedback')}
                </div>
            </Link>
        </NavStyledWrapper>
    )
}

export default Nav
