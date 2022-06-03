import './styles.css';

import Arrowdonw from "../../assets/icons/down-arrow.png";



export const Name = () => {
    return (
        <div className="content-name">
            <p className="p-title">Portfolio</p>
            <h1>Gabriel Gonçalves Cunha </h1>
            <p className="p-subtitle">Desenvolvedor front end</p>
            <img className="arrow" src={Arrowdonw} alt="" />
        </div>
    );
}