import './styles.css';
import Logo from "../../assets/photos/favicon-64X64.png"


export const Footer = () => {
    return (
        <div className="container-footer">
            <div className="content-footer">
                <img src={Logo} alt="" />
                <p className="copy">@ site developed by Gabriel Gonçalves Cunha · 2024</p>
                <p className="copy">All honor and glory given to God</p>
            </div>
        </div>
    );
}