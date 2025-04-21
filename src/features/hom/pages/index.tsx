import { type FC } from 'react'
import { useTranslation } from "react-i18next";
import { Card, CardList, Feedback, Maps, Carousel } from "@/components"
import { Events, Residents } from "../../../contents"

import { HomWrapper } from './Hom.styled.tsx'
import home_screensaver from '../components/home_screensaver.png'

const Home: FC = () => {
    const { t } = useTranslation()
    const homCount = 'Hom.section_content'

    return (
        <HomWrapper>

            <section className='img_container'>
                <img src={home_screensaver} alt=""/>
                <div className='text_container'>
                    <span>{t('Hom.screensaver.title')}</span>
                    <span>{t('Hom.screensaver.subtitle')}</span>
                </div>
            </section>

            <section className='card_container'>
                <div className="content">
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
            </section>

            <section className="events_container">
                <div className="content">
                    <span className='title events_title'>
                        {t('Hom.section_events.title')}
                    </span>
                    <CardList content={Events} title={true} type={'Card_Modal'} variant={'linerCard'} direction={"column"}/>
                </div>
            </section>

            <section className="resident_container">
                <div className="content">
                    <span className='title resident_title'>
                        {t('Hom.section_resident.title')}
                    </span>

                    {/*<Carousel*/}
                    {/*    items={ Residents }*/}
                    {/*    autoPlay*/}
                    {/*    interval={5000}*/}
                    {/*    showControls*/}
                    {/*    showDots={false}*/}
                    {/*/>*/}

                    {/*<CarouselCard title={false} itemsCard={Residents}/>*/}

                    <Carousel items={Residents}/>

                </div>
            </section>

            <section className='feedback_container'>
                <div className="content">
                    <span className='title feedback_title'>
                        {t('Hom.section_Feedback.title')}
                    </span>

                    <div className="feedback_content">
                        <div className="feedback">
                            <Feedback/>
                        </div>

                        <Maps/>
                    </div>
                </div>
            </section>

        </HomWrapper>
    )
}

export default Home
