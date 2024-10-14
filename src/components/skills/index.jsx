import { i18n } from "../../translate/i18n";

import "./styles.css";

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
          <h3>{i18n.t("skills.focus")}</h3>
          <p>{i18n.t("skills.p")}</p>
          <hr />

          <p className="sub-p">Frameworks / Library / Languages</p>
          <div className="skill-camp">
            <div className="skill-box-pro">
              <span>React.js</span>
            </div>
            <div className="skill-box">
              <span>Node.js</span>
            </div>
            <p className="dot">.</p>
            <div className="skill-box">
              <span>React</span>
            </div>
            <p className="dot">.</p>
            <div className="skill-box-pro">
              <span>HTML</span>
            </div>
            <div className="skill-box-pro">
              <span>CSS</span>
            </div>
            <div className="skill-box">
              <span>JavaScript</span>
            </div>
          </div>

          <p className="sub-p">Tools / Design web </p>
          <div className="skill-camp">
            <div className="skill-box-pro">
              <span>Visual Studio</span>
            </div>
            <div className="skill-box">
              <span>Figma</span>
            </div>
            <p className="dot">.</p>
            <div className="skill-box">
              <span>UX/UI</span>
            </div>
            <div className="skill-box-pro">
              <span>Photoshop</span>
            </div>
            <div className="skill-box">
              <span>Ilustrator</span>
            </div>
          </div>

          <p className="sub-p">Google / Hosting</p>
          <div className="skill-camp">
            <div className="skill-box-pro">
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
            <div className="skill-box-pro">
              <span>Netlifly</span>
            </div>
          </div>

          <p className="sub-p">Version control / Hub</p>
          <div className="skill-camp">
            <div className="skill-box">
              <span>Git</span>
            </div>
            <div className="skill-box-pro">
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

          {/* <p className="sub-p">Online platform</p>
          <div className="skill-camp">
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
          </div> */}
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
};
