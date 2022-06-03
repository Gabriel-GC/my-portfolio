import './styles.css';

import Arrowdonw from "../../assets/icons/plant-variant-with-circular-leaves.png";

export const Name = () => {
    return (
        <div className="content-name">
            <img className="arrow" src={Arrowdonw} alt="Seta apontando para baixo" />
            <p className="p-title">Portfolio</p>
            <h1>Gabriel Gonçalves Cunha </h1>
            <p className="p-subtitle">Desenvolvedor front end</p>
        </div>
    );
}