import { i18n } from "../../translate/i18n";

import './styles.css';

import Linkedin from "../../assets/icons/linkedin.png";
import Whats from "../../assets/icons/whatsapp.png";
import Facebook from "../../assets/icons/facebook.png";
import Github from "../../assets/icons/github.png";
import Source from "../../assets/icons/source.png";




export const Contact = () => {
    return (
        <>
            <span id="contact"></span>
            <div className="container-contact">
                <div className="content-contact">
                    <p className='p-contact'>{i18n.t('contact.send')}</p>
                </div>
                <div className="content-contact-text">
                    <a href="mailto:goncalves.cunhaa@gmail.com?subject=CONTATO BY PORTFOLIO">
                        <h5>goncalves.cunhaa@gmail.com</h5>
                    </a>
                </div>
                <div className="content-contact">
                    <p className='p-title'>{i18n.t('contact.follow')}</p>
                </div>
                <div className="content-contact-image">
                    <a href="https://api.whatsapp.com/send?phone=5547999963122&text=Ol%C3%A1%2C%20vamos%20marcar%20uma%20call%20%3F" target="_blank" rel="noreferrer">
                        <img src={Whats} alt="WhatsApp" />
                    </a>

                    <a href="https://www.linkedin.com/in/gabriel-gon%C3%A7alves-cunha-37347b305/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>

                    <a href="https://www.facebook.com/gabriel.goncalves.9797" target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="Facebook" />
                    </a>

                    <a href="https://github.com/Gabriel-GC" target="_blank" rel="noreferrer">
                        <img src={Github} alt="Github" />
                    </a>

                    <a href="https://github.com/Gabriel-GC/my-portfolio" target="_blank" rel="noreferrer">
                        <img src={Source} alt="Source" />
                    </a>
                </div>
            </div>
                <hr />
        </>
    );
}