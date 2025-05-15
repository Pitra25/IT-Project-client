import { type FC } from 'react'
import { useTranslation } from "react-i18next"
import { Link, useLocation } from 'react-router-dom'

import { useGetImages } from "@/hooks"
import { pathsConfig } from "@/pathsConfig"

import {
    FooterStyledWrapper,
    // DropdownWrapper,
    // DropdownWrapperNested
} from './Footer.styled.tsx'

import icon_phone from '../Pictures/icon-number_phone.png'
import icon_email from '../Pictures/icon-email.png'

const Footer: FC = () => {
    const { t } = useTranslation()
    let urlImg = useGetImages('Logo.png')

    // for nav
    const loc = useLocation()
    const locName = loc.pathname.split('/')[1]

    const cluster_link = 'nav.header.cluster.content'
    const services_link = 'nav.header.services.content'

    return (
        <FooterStyledWrapper>
            <section className='footer_container'>
                <div className="content">
                    <div className="content_in">
                        <div className='logo_container'>
                            <div className='footer_logo'>
                                <img src={urlImg} alt='logo IT Project'/>
                            </div>

                            <div className='footer_heading'>
                                <span>{t('title_name.part1')}<b>{t('title_name.part2')}</b></span>
                                <span>{t('subtitle_name.part1')}</span>
                                <span>{t('subtitle_name.part2')}</span>
                            </div>
                        </div>
                        <div className='nav'>
                            <div id='menu-list' className="menu-list">
                                <Link to={pathsConfig.home} className={`link fontSize ${locName === '' ? 'active' : ''}`}
                                      data-type='hom'>
                                    <div className='content'>
                                        {t('nav.header.hom')}
                                    </div>
                                </Link>

                                {/*<DropdownWrapper>*/}
                                {/*    <div className="dropdown">*/}
                                {/*        <div className="dropbtn fontSize">{t('nav.header.cluster.title')}</div>*/}
                                {/*        <div className="dropdown-content">*/}
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
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</DropdownWrapper>*/}

                                {/*<DropdownWrapper>*/}
                                {/*    <div className="dropdown">*/}
                                {/*        <div className="dropbtn fontSize">{t('nav.header.services.title')}</div>*/}
                                {/*        <div className="dropdown-content">*/}
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
                                            {/*<DropdownWrapperNested>*/}
                                            {/*    <div className="dropdown-nested">*/}
                                            {/*        <div className="dropbtn-nested fontSize">{t('nav.header.services.content.link_4.title')}</div>*/}
                                            {/*        <div className="dropdown-content-nested">*/}
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
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                {/*            </DropdownWrapperNested>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</DropdownWrapper>*/}

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
                        </div>

                        <div className='contact'>
                            <div className="contact_title fontSize">
                                <span>Контактная информация:</span>
                            </div>
                            <div className="contact_email fontSize">
                                <img src={icon_email} className="email_icon" alt="icon email"/>
                                <span>akorn@it-project.su</span>
                            </div>
                            <div className="contact_number_phone fontSize">
                                <img src={icon_phone} className="phone_icon" alt="icon number phone"/>
                                <span>+7(4842) 77-09-09</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FooterStyledWrapper>
    )
}

export default Footer
