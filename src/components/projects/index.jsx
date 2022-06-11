import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


import Verbenaclub from "../../assets/photos/projects/verbena/verbenaclub-project-capa.png";
import Verbena1 from "../../assets/photos/projects/verbena/verbenaclub-modal-1.png";
import Verbena2 from "../../assets/photos/projects/verbena/verbenaclub-modal-2.png";
import Verbena3 from "../../assets/photos/projects/verbena/verbenaclub-modal-3.png";


import './styles.css';

Modal.setAppElement("#root");

export const Projects = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <span id="projects"></span>
            <div className="container-projects">
                <div className="txt-projects">
                    <div className="p-title">Projetos</div>
                    <h4>Desenvolvimentos e participações</h4>
                </div>
                <div className="grid-projects">
                    <div className="project">
                        <img src={Verbenaclub} alt="" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModal} className="btn-down"><p>Ver mais</p></button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    contentLabel="Modal Example"
                                    overLayClassName="modal-overlay"
                                    className="modal-content"
                                >
                                    <Swiper
                                        pagination={{
                                            clickable: true,
                                          }}
                                        navigation={true}
                                        loop={true}
                                        slidesPerView={1}
                                        autoplay={{ delay: 5000 }}
                                        modules={[Pagination, Navigation]}
                                    >
                                        <SwiperSlide><img src={Verbena1} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={Verbena2} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={Verbena3} alt="" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Lading Page - Verbena Club</h4>
                                    <a href="https://verbenaclub.com/" target='_blank' rel='noreferrer' >https://verbenaclub.com/</a>
                                    <hr />
                                    <p>Minha primeira lading page dentro de uma organização que executei solo do header até o footer, claro que com muitas referências ter essa projeto em minhas mãos foi ótimo para por meus conhecimentos até então mais teóricos em prática, terminei com exito, apresentado e aprovado com elogios pelo então cliente.</p>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div >
        </>
    );
}