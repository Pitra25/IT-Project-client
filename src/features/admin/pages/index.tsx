import { type FC } from 'react'
import { AdminWrapper } from "./Admin.styled.tsx"

const Admin: FC = () => {
    return (
        <AdminWrapper>

            <section className='admin_container'>
                <div className="content">
                    <div className="projects_events_section">
                        <div className="add_button">Добавить</div>
                        <div className="projects_events_container projects">
                            <span className="title">Проекты</span>
                            <div className="cards_container">

                                <div className="card">
                                    <div className="card_image"></div>
                                    <div className="card_info">
                                        <div className="card_text">
                                            <span className="card_title title">Проект 1</span>
                                            <span className="card_disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                        </div>
                                        <div className="card_buttons">
                                            <div className="edit_button">Редактировать</div>
                                            <div className="remove_button">Удалить</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="services_section">
                        <div className="add_button">Добавить</div>
                        <div className="services_container services">
                            <span className="title">Услуги</span>
                            <div className="services_cards_container">

                                <div className="card">
                                    <div className="card_image"></div>
                                    <div className="card_info">
                                        <div className="card_text">
                                            <span className="card_title title">Проект 1</span>
                                            <span className="card_disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                        </div>
                                        <div className="card_buttons">
                                            <div className="edit_button">Редактировать</div>
                                            <div className="remove_button">Удалить</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </AdminWrapper>
    )
}

export default Admin


// import { type FC } from 'react'
// import { AdminWrapper } from "./Admin.styled.tsx"
//
// const Admin: FC = () => {
//     return (
//         <AdminWrapper>
//
//             <section className='_container'>
//                 <div className="content">
//
//                     <span className='title'>Admin</span>
//
//                 </div>
//             </section>
//
//             <section className='_container'>
//                 <div className="content">
//
//                     <span className='title'></span>
//
//                 </div>
//             </section>
//
//             <section className='_container'>
//                 <div className="content">
//
//                     <span className='title'>Cluster</span>
//
//                 </div>
//             </section>
//
//         </AdminWrapper>
//     )
// }
//
// export default Admin
