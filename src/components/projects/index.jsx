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

import Portfolio from "../../assets/photos/projects/portfolio/portfolio.png";
import Portfolio1 from "../../assets/photos/projects/portfolio/portfolio-modal-1.png";
import Portfolio2 from "../../assets/photos/projects/portfolio/portfolio-modal-2.png";




import './styles.css';

Modal.setAppElement("#root");

export const Projects = () => {

    const [modalOneIsOpen, setOneIsOpen] = useState(false);
    const [modalTwoIsOpen, setTwoIsOpen] = useState(false);


    function openModalOne() {
        setOneIsOpen(true);
    }

    function closeModalOne() {
        setOneIsOpen(false);
    }

    function openModalTwo() {
        setTwoIsOpen(true);
    }

    function closeModalTwo() {
        setTwoIsOpen(false);
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
                                <button onClick={openModalOne} className="btn-down"><p>Ver mais</p></button>
                                <Modal
                                    isOpen={modalOneIsOpen}
                                    onRequestClose={closeModalOne}
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
                                    <hr />
                                    <a href="https://verbenaclub.com/" target='_blank' rel='noreferrer' >https://verbenaclub.com/</a>
                                    <button onClick={closeModalOne}><p>Fechar</p></button>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src={Portfolio} alt="" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalTwo} className="btn-down"><p>Ver mais</p></button>
                                <Modal
                                    isOpen={modalTwoIsOpen}
                                    onRequestClose={closeModalTwo}
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
                                        <SwiperSlide><img src={Portfolio1} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={Portfolio2} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={Portfolio2} alt="" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Meu portfolio - Gabriel</h4>
                                    <hr />
                                    <a href="https://portfoliogabrielgc.netlify.app/" target='_blank' rel='noreferrer' >https://portfoliogabrielgc.netlify.app/</a>
                                    <button onClick={closeModalTwo}><p>Fechar</p></button>
                                </Modal>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
            <hr />
        </>
    );
}