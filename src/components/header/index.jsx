import './styles.css';

import Instagram from "../../assets/icons/instagram.png";
import Facebook from "../../assets/icons/facebook.png";
import Linkedin from "../../assets/icons/linkedin.png";

export const Header = () => {
    return (
        <div className="container-header">
            <div className="content-header">
                <a href="https://api.whatsapp.com/send?phone=5547999963122&text=Ol%C3%A1%2C%20vamos%20marcar%20uma%20call%20%3F" target="_blank" rel="noopener" >Contato</a>
            </div>
            <div className="content-header">
                <a href="https://www.instagram.com/gabriel.goncalvesc/?hl=pt-br" target="_blank" rel="noopener" >
                    <img src={Instagram} alt="Logo Instagram" />
                </a>
                <a href="https://www.facebook.com/gabriel.goncalves.9797" target="_blank" rel="noopener" >
                    <img src={Facebook} alt="Logo Facebook" />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-gon%C3%A7alves-cunha-42a67214a/" target="_blank" rel="noopener" >
                    <img src={Linkedin} alt="Logo Linkedin" />
                </a>
            </div>
        </div>
    );
}