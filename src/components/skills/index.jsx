import './styles.css';

import Blur from "../../assets/icons/blur.png";
import HTML from "../../assets/icons/skils/html-5.png";
import CSS from "../../assets/icons/skils/css-3.png";
import React from "../../assets/icons/skils/react.png";
import VS from "../../assets/icons/skils/vscode.png";
import JS from "../../assets/icons/skils/js.png";
import Node from "../../assets/icons/skils/node-js.png";
import Ps from "../../assets/icons/skils/ps.png";
import Figma from "../../assets/icons/skils/figma.png";
import Git from "../../assets/icons/skils/git.png";

export const Skills = () => {
    return (
        <>
            <span id="skills"></span>
            <div className="container-skills">
                <div className="txt">
                    <h3>Foco e skills</h3>
                    <p>Me considero muito aplicado na resolução de problemas. Acho que compartilhar soluções gera inspiração, quero ter a oportunidade e, no momento favorável, ensinar esses passos para iniciantes, conforme eu fui orientado e startado no mundo Dev.</p>
                    {/* <p>I am very interested and easy to learn, I consider myself very applied in problem solving. I think that sharing solutions generates inspiration, I want to have the opportunity to grow and, at the opportunity, teach these steps to beginners, as I was instructed.</p> */}
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
                            <span>Node Js</span>
                        </div>
                        <div className="skill-box">
                            <span>Github</span>
                        </div>
                        <div className="skill-box">
                            <span>Git</span>
                        </div>
                        <div className="skill-box">
                            <span>Netlifly</span>
                        </div>
                        <div className="skill-box">
                            <span>Figma</span>
                        </div>
                        <div className="skill-box">
                            <span>Slack</span>
                        </div>
                        <div className="skill-box">
                            <span>Digital Ocean</span>
                        </div>
                        <div className="skill-box">
                            <span>Java Script</span>
                        </div>
                        <div className="skill-box">
                            <span>Photoshop</span>
                        </div>
                        <div className="skill-box">
                            <span>Illustrator</span>
                        </div>
                        <div className="skill-box">
                            <span>Visual Studio Code</span>
                        </div>
                        <div className="skill-box">
                            <span>Web design</span>
                        </div>
                        <div className="skill-box">
                            <span>Wix</span>
                        </div>
                        <div className="skill-box">
                            <span>NuvemShop</span>
                        </div>
                        <div className="skill-box">
                            <span>Loja Integrada</span>
                        </div>
                        <div className="skill-box">
                            <span>Magazord</span>
                        </div>
                        <div className="skill-box">
                            <span>UI</span>
                        </div>
                        <div className="skill-box">
                            <span>SEO</span>
                        </div>
                    </div>
                </div>
                <div className="asset">
                    <img className='blur' src={Blur} alt="Imagem gradiente branco" />
                    <div className="techs">
                        <div className="tech">
                            <img src={HTML} alt="Logo HTML" />
                        </div>
                        <div className="tech">
                            <img src={CSS} alt="Logo CSS" />
                        </div>
                        <div className="tech">
                            <img src={React} alt="Logo React" />
                        </div>
                        <div className="tech">
                            <img src={VS} alt="Logo Visual Studio Code " />
                        </div>
                        <div className="tech">
                            <img src={JS} alt="Logo Java" />
                        </div>
                        <div className="tech">
                            <img src={Node} alt="Logo Node js" />
                        </div>
                        <div className="tech">
                            <img src={Ps} alt="Logo Photoshop" />
                        </div>
                        <div className="tech">
                            <img src={Figma} alt="Logo Figma" />
                        </div>
                        <div className="tech">
                            <img src={Git} alt="Logo Github" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}