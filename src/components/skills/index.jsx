import { i18n } from "../../translate/i18n";

import "./styles.css";

// import Blur from "../../assets/icons/blur.png";
import Blur from "../../assets/photos/logo-g.png";
import HTML from "../../assets/icons/skils/html.png";
import CSS from "../../assets/icons/skils/css.png";
import React from "../../assets/icons/skils/react.png";
import VS from "../../assets/icons/skils/vs.png";
import JS from "../../assets/icons/skils/js.png";
import Node from "../../assets/icons/skils/node-js.png";
import Mui from "../../assets/icons/skils/mui.png";
import Figma from "../../assets/icons/skils/figma.png";
import Git from "../../assets/icons/skils/github.png";

export const Skills = () => {
  return (
    <>
      <span id="skills"></span>
      <div className="container-skills">
        <div className="txt">
          <h3>{i18n.t("skills.focus")}</h3>
          <p>{i18n.t("skills.p")}</p>
          <hr />

          <p className="sub-p">Frameworks / Library / Languages</p>
          <div className="skill-camp">
            <div className="skill-box">
              <span>React.js</span>
            </div>
            <div className="skill-box">
              <span>Node.js</span>
            </div>
            <p className="dot">.</p>
            <div className="skill-box">
              <span>React</span>
            </div>
            <div className="skill-box">
              <span>Material Ui</span>
            </div>
            <div className="skill-box">
              <span>SCSS</span>
            </div>
            <p className="dot">.</p>
            <div className="skill-box">
              <span>HTML</span>
            </div>
            <div className="skill-box">
              <span>CSS</span>
            </div>
            <div className="skill-box">
              <span>JavaScript</span>
            </div>
            <div className="skill-box">
              <span>Python</span>
            </div>
          </div>

          <p className="sub-p">Tools / Design web </p>
          <div className="skill-camp">
            <div className="skill-box">
              <span>Visual Studio</span>
            </div>
            <div className="skill-box">
              <span>Figma</span>
            </div>
            <p className="dot">.</p>
            <div className="skill-box">
              <span>UX/UI</span>
            </div>
            <div className="skill-box">
              <span>Photoshop</span>
            </div>
            <div className="skill-box">
              <span>Ilustrator</span>
            </div>
          </div>

          <p className="sub-p">Google / Hosting</p>
          <div className="skill-camp">
            <div className="skill-box">
              <span>SEO</span>
            </div>
            <div className="skill-box">
              <span>Analytics</span>
            </div>
            <div className="skill-box">
              <span>Search Console</span>
            </div>
            <p className="dot">.</p>
            <div className="skill-box">
              <span>Digital Ocean</span>
            </div>
            <div className="skill-box">
              <span>Netlifly</span>
            </div>
          </div>

          <p className="sub-p">Version control / Hub</p>
          <div className="skill-camp">
            <div className="skill-box">
              <span>Git</span>
            </div>
            <div className="skill-box">
              <span>Gitub</span>
            </div>
            <p className="dot">.</p>
            <div className="skill-box">
              <span>Slack</span>
            </div>
            <div className="skill-box">
              <span>Monday</span>
            </div>
            <div className="skill-box">
              <span>Trello</span>
            </div>
          </div>
        </div>
        <div className="asset">
          <img className="blur" src={Blur} alt="Imagem gradiente branco" />
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
              <img src={Mui} alt="Logo Material ui" />
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
};
