import { type FC } from 'react'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import { pathsConfig } from "@/pathsConfig"
import { Slider, Card, CardList } from "@/components"
import { Events, Residents } from "../../../contents";

import { HomWrapper } from './Hom.styled.tsx'

const Hom: FC = () => {
    const { t } = useTranslation()
    const homCount = 'Hom.content'
    return (
        <HomWrapper>

            <div className='img_container'>
                <div className='text_container'>
                    <span className='text_title'>{t('Hom.title')}</span>
                    <span className='text_description'>{t('title')}</span>
                </div>
            </div>

            <div className='card_container'>
                <Card className='card'>
                    <div>
                        <span>{t(homCount + '.card.card1')}</span>
                    </div>
                </Card>
                <Card className='card'>
                    <div>
                        <span>{t(homCount + '.card.card2')}</span>
                    </div>
                </Card>
                <Card className='card'>
                    <div>
                        <span>{t(homCount + '.card.card3')}</span>
                    </div>
                </Card>
            </div>

            <div className="events_container">
                <span>{t('tile')}</span>
                <CardList content={Events} title={true} type={'Card_Modal'} variant={'linerCard'} direction={"column"}/>
            </div>

            <div className="resident_container">
                <span>{t('title')}</span>

                <Slider/>

                <CardList content={Residents} title={false} type={'Card_Modal'} variant={'mineCard'} direction={"row"}/>
            </div>

            <Link to={pathsConfig.login} className={`link`}
                  data-type='login'>
                 login
            </Link>
        </HomWrapper>
    )
}

export default Hom
