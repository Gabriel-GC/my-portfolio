import './styles.css';

import Linkedin from "../../assets/icons/linkedin.png";
import Whats from "../../assets/icons/whatsapp.png";



export const Footer = () => {
    return (
        <div className="container-footer">
            <div className="content-footer">
                <p className="Copy">@ Gabriel Gonçalves Cunha / 2022</p>
            </div>
            <div className="content-footer">
                <a href="https://api.whatsapp.com/send?phone=5547999963122&text=Ol%C3%A1%2C%20vamos%20marcar%20uma%20call%20%3F" target="_blank" rel="noreferrer"><img src={Whats} alt="WhatsApp Link" /></a>
                <a href="https://www.linkedin.com/in/gabriel-gon%C3%A7alves-cunha-42a67214a/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin Link" /></a>
            </div>
        </div>
    );
}