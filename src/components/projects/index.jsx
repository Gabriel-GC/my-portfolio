import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Share from "../../assets/icons/share.png";

import Postevent from "../../assets/photos/projects/postevent/postevent-capa.png";
import Postevent1 from "../../assets/photos/projects/postevent/postevent-project-one.png";
import Postevent2 from "../../assets/photos/projects/postevent/postevent-project-desktop.png";
import Postevent3 from "../../assets/photos/projects/postevent/postevent-project-mobile.png";



import Verbena from "../../assets/photos/projects/verbena/verbena-capa.png";
import Verbena1 from "../../assets/photos/projects/verbena/verbena-project-one.png";
import Verbena2 from "../../assets/photos/projects/verbena/verbena-project-desktop.png";
import Verbena3 from "../../assets/photos/projects/verbena/verbena-project-mobile.png";

import Portfolio from "../../assets/photos/projects/portfolio/portfolio-capa.png";
import Portfolio1 from "../../assets/photos/projects/portfolio/portfolio-project-one.png";
import Portfolio2 from "../../assets/photos/projects/portfolio/portfolio-project-desktop.png";
import Portfolio3 from "../../assets/photos/projects/portfolio/portfolio-project-mobile.png";




import './styles.css';

Modal.setAppElement("#root");

export const Projects = () => {

    const [modalOneIsOpen, setOneIsOpen] = useState(false);
    const [modalTwoIsOpen, setTwoIsOpen] = useState(false);
    const [modalTreIsOpen, setTreIsOpen] = useState(false);


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
    function openModalTre() {
        setTreIsOpen(true);
    }

    function closeModalTre() {
        setTreIsOpen(false);
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
                        <img src={Verbena} alt="Verbena" />
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
                                        <SwiperSlide><img src={Verbena1} alt="mockup site logo" /></SwiperSlide>
                                        <SwiperSlide><img src={Verbena2} alt="mockup site desktop" /></SwiperSlide>
                                        <SwiperSlide><img src={Verbena3} alt="mockup site mobile" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Lading Page - Verbena Club</h4>
                                    <hr />
                                    <div className="content-link">
                                        <img className="share" src={Share} alt="" />
                                        <a href="https://verbenaclub.com/" target='_blank' rel='noreferrer' >https://verbenaclub.com/</a>
                                    </div>
                                    <button onClick={closeModalOne}><p>Fechar</p></button>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={Portfolio} alt="Portfolio" />
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
                                        <SwiperSlide><img src={Portfolio1} alt="mockup site logo" /></SwiperSlide>
                                        <SwiperSlide><img src={Portfolio2} alt="mockup site desktop" /></SwiperSlide>
                                        <SwiperSlide><img src={Portfolio3} alt="mockup site mobile" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Meu portfolio - Gabriel</h4>
                                    <hr />
                                    <div className="content-link">
                                        <img className="share" src={Share} alt="" />
                                        <a href="https://portfoliogabrielgc.netlify.app/" target='_blank' rel='noreferrer' >https://portfoliogabrielgc.netlify.app/</a>
                                    </div>
                                    <button onClick={closeModalTwo}><p>Fechar</p></button>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={Postevent} alt="Postevent" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalTre} className="btn-down"><p>Ver mais</p></button>
                                <Modal
                                    isOpen={modalTreIsOpen}
                                    onRequestClose={closeModalTre}
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
                                        <SwiperSlide><img src={Postevent1} alt="mockup site logo" /></SwiperSlide>
                                        <SwiperSlide><img src={Postevent2} alt="mockup site desktop" /></SwiperSlide>
                                        <SwiperSlide><img src={Postevent3} alt="mockup site mobile" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Post Event</h4>
                                    <hr />
                                    <div className="content-link">
                                        <img className="share" src={Share} alt="" />
                                        <a href="https://postevent.netlify.app/" target='_blank' rel='noreferrer' >https://postevent.netlify.app/</a>
                                    </div>
                                    <button onClick={closeModalTre}><p>Fechar</p></button>
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