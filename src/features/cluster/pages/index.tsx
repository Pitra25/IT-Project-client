import { type FC } from 'react'
import { ClusterWrapper } from './Cluster.styled.tsx'

const Cluster: FC = () => {
    return (
        <ClusterWrapper>

            <section className='_container'>
                <div className="content">

                    <span className='title'>Cluster</span>

                </div>
            </section>

            <section className='_container'>
                <div className="content">

                    <span className='title'></span>

                </div>
            </section>

            <section className='_container'>
                <div className="content">

                    <span className='title'>Cluster</span>

                </div>
            </section>

        </ClusterWrapper>
    )
}

export default Cluster
