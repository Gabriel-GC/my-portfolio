import { useState } from "react";

import { i18n } from "../../translate/i18n";

import Modal from "react-modal/lib/components/Modal";

import './styles.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Share from "../../assets/icons/share.png";
import More from "../../assets/photos/foto-capa-modal-morepost.png";

//modal imports

import Turnflix from "../../assets/photos/projects/turnflix/turnflix-capa.png";
import Turnflix1 from "../../assets/photos/projects/turnflix/turnflix-project-one.png";
import Turnflix2 from "../../assets/photos/projects/turnflix/turnflix-project-desktop.png";
import Turnflix3 from "../../assets/photos/projects/turnflix/turnflix-project-mobile.png";

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

import Alpes from "../../assets/photos/projects/alpes/alpes.webp";
import Alpes_logo from "../../assets/photos/projects/alpes/alpes-logo.webp";
import Alpes_desk from "../../assets/photos/projects/alpes/alpes-desk.webp";
import Alpes_mobile from "../../assets/photos/projects/alpes/alpes-mobile.webp";

import Jeep from "../../assets/photos/projects/jeep/jeep.webp"
import Jeep_logo from "../../assets/photos/projects/jeep/jeep-capa.jpg"
import Jeep_desk from "../../assets/photos/projects/jeep/jeep-desk.webp"
import Jeep_mobile from "../../assets/photos/projects/jeep/jeep-mobile.jpg"

Modal.setAppElement("#root");

export const Projects = () => {

    const [modalOneIsOpen, setOneIsOpen] = useState(false);
    const [modalTwoIsOpen, setTwoIsOpen] = useState(false);
    const [modalTreIsOpen, setTreIsOpen] = useState(false);
    const [modalForIsOpen, setForIsOpen] = useState(false);
    const [modalFiveIsOpen, setFiveIsOpen] = useState(false);
    const [modalSixIsOpen, setSixIsOpen] = useState(false);


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

    function openModalFor() {
        setForIsOpen(true);
    }

    function closeModalFor() {
        setForIsOpen(false);
    }

    function openModalFive() {
        setFiveIsOpen(true);
    }

    function closeModalFive() {
        setFiveIsOpen(false);
    }

    function openModalSix() {
        setSixIsOpen(true);
    }

    function closeModalSix() {
        setSixIsOpen(false);
    }

    return (
        <>
            <span id="projects"></span>
            <div className="container-projects">
                <div className="txt-projects">
                    <div className="p-title">{i18n.t('projects.project')}</div>
                    <h4>{i18n.t('projects.development')}</h4>
                </div>
                <div className="grid-projects">
                    <div className="project">
                        <img src={Verbena} alt="Verbena" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalOne} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>
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
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>Java Script</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>HTML 5</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>CSS 3</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>React</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Visual Studio Code</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>SEO</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Figma</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Git</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Github</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Digital Ocean</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://verbenaclub.com/" target='_blank' rel='noreferrer' >verbenaclub.com</a>
                                        <img className="share" src={Share} alt="Share" />
                                    </div>
                                    <button onClick={closeModalOne}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={Portfolio} alt="Portfolio" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalTwo} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>
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
                                    <h4>Portfolio - Gabriel</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>Java Script</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>HTML 5</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>CSS 3</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>React</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Visual Studio Code</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>SEO</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>UI</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Photoshop</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Git</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Github</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Netlifly</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://portfoliogabrielgc.netlify.app/" target='_blank' rel='noreferrer' >portfoliogabrielgc.netlify.app</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalTwo}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={Postevent} alt="Postevent" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalTre} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>
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
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>Java Script</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>HTML 5</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>CSS 3</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>React</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Visual Studio Code</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>SEO</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Fake API for testing</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Netlifly</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Git</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Github</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://postevent.netlify.app/" target='_blank' rel='noreferrer' >postevent.netlify.app</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalTre}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={Turnflix} alt="Turnflix" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalFor} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>

                                <Modal
                                    isOpen={modalForIsOpen}
                                    onRequestClose={closeModalFor}
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
                                        <SwiperSlide><img src={Turnflix1} alt="mockup site logo" /></SwiperSlide>
                                        <SwiperSlide><img src={Turnflix2} alt="mockup site desktop" /></SwiperSlide>
                                        <SwiperSlide><img src={Turnflix3} alt="mockup site mobile" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Turnflix</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>HTML 5</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>CSS 3</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>React</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Visual Studio Code</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>SEO</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Figma</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Git</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Github</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>UI</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://turnflix.com/" target='_blank' rel='noreferrer' >turnflix.com</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalFor}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={Alpes} alt="Alpes" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalFive} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>

                                <Modal
                                    isOpen={modalFiveIsOpen}
                                    onRequestClose={closeModalFive}
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
                                        <SwiperSlide><img src={Alpes_logo} alt="mockup site logo" /></SwiperSlide>
                                        <SwiperSlide><img src={Alpes_desk} alt="mockup site desktop" /></SwiperSlide>
                                        <SwiperSlide><img src={Alpes_mobile} alt="mockup site mobile" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Alpes</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>HTML 5</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>CSS 3</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Photoshop</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Visual Studio Code</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>SEO</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Git</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Github</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>UI</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://alpes.netlify.app/" target='_blank' rel='noreferrer' >alpes.netlify.app</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalFive}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={Jeep} alt="Jeep Form" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalSix} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>

                                <Modal
                                    isOpen={modalSixIsOpen}
                                    onRequestClose={closeModalSix}
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
                                        <SwiperSlide><img src={Jeep_logo} alt="mockup site logo" /></SwiperSlide>
                                        <SwiperSlide><img src={Jeep_desk} alt="mockup site desktop" /></SwiperSlide>
                                        <SwiperSlide><img src={Jeep_mobile} alt="mockup site mobile" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Jeep Form</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>HTML 5</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>CSS 3</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Photoshop</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Visual Studio Code</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>SEO</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Git</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Github</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>UI</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://form-totest.netlify.app/" target='_blank' rel='noreferrer' >form-totest.netlify.app</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalSix}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="more">
                            <img src={More} alt="More" />
                        </div>
                    </div>


                </div>
            </div >
            <hr />
        </>
    );
}