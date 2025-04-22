import {type FC } from 'react'
import { useTranslation } from "react-i18next"
import {
    YMaps,
    Map,
    Placemark,
    GeolocationControl,
    Clusterer,
    ZoomControl,
    RulerControl
} from '@pbe/react-yandex-maps'

import { Addresses } from "../../../../contents"
import { MapWrapper } from './Map.styled.tsx'

const Maps: FC = () => {
    const { t } = useTranslation()

    return (
        <MapWrapper>
            <YMaps query={{apikey: import.meta.env.VITE_YAPI_KEY}} >
                <Map
                    className='ymap'
                    defaultState={{
                        center: [54.51, 36.26],
                        zoom: 13,
                        controls: [],
                    }}
                >
                    <ZoomControl options={{ float: "left" }} />
                    <GeolocationControl options={{ float: "left" }} />
                    <RulerControl options={{ float: "right" } } />

                    <Clusterer
                        options={{
                            preset: "islands#invertedVioletClusterIcons",
                            groupByCoordinates: false,
                        }}
                    >
                        {Addresses?.map((item, index) => (
                            <Placemark
                                key={index}
                                geometry={item.coordinates}
                                properties={{
                                    balloonContent: `
                                        <div>
                                            <strong>${t('Hom.section.map.address')}: </strong> ${t(item.address + '.name')}
                                        </div>
                                    `
                                }}
                                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                options={{
                                    balloonCloseButton: true,
                                    hideIconOnBalloonOpen: false,
                                    iconLayout: 'default#image',
                                    iconImageSize: [30, 42],
                                    iconImageOffset: [-3, -42]
                                }}
                            />
                        ))}
                    </Clusterer>
                </Map>
            </YMaps>

        </MapWrapper>
    )
}

export default Maps
