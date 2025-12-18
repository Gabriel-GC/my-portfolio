import React from "react";
import { i18n } from "../../translate/i18n";
import "./styles.css";

// Imports de Imagens
import Blur from "../../assets/photos/logo-g.png";
import HTML from "../../assets/icons/skils/html.png";
import CSS from "../../assets/icons/skils/css.png";
import ReactIcon from "../../assets/icons/skils/react.png";
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

          {/* --- DESENVOLVIMENTO --- */}
          <div className="skill-section">
            <p className="sub-p"><strong>Desenvolvimento:</strong> {i18n.t("skills.development_desc")}</p>
            <div className="skill-camp">
              <div className="skill-box"><span>React.js</span></div>
              <div className="skill-box"><span>Vue.js</span></div>
              <div className="skill-box"><span>Node.js</span></div>
              <div className="skill-box"><span>JavaScript</span></div>
            </div>
          </div>

          {/* --- DESIGN --- */}
          <div className="skill-section">
            <p className="sub-p"><strong>Design & UX:</strong> {i18n.t("skills.design_desc")}</p>
            <div className="skill-camp">
              <div className="skill-box"><span>Figma</span></div>
              <div className="skill-box"><span>UI/UX Design</span></div>
              <div className="skill-box"><span>Material UI</span></div>
            </div>
          </div>

          {/* --- PERFORMANCE --- */}
          <div className="skill-section">
            <p className="sub-p"><strong>Performance & Infra:</strong> {i18n.t("skills.marketing_desc")}</p>
            <div className="skill-camp">
              <div className="skill-box"><span>SEO Avançado</span></div>
              <div className="skill-box"><span>Google Analytics</span></div>
              <div className="skill-box"><span>Cloud Hosting</span></div>
            </div>
          </div>

          {/* --- WORKFLOW --- */}
          <div className="skill-section">
            <p className="sub-p"><strong>Gestão de Código:</strong> {i18n.t("skills.workflow_desc")}</p>
            <div className="skill-camp">
              <div className="skill-box"><span>Git / GitHub</span></div>
              <div className="skill-box"><span>Bitbucket</span></div>
              <div className="skill-box"><span>Metodologia Ágil</span></div>
              <div className="skill-box"><span>Kanban</span></div>
            </div>
          </div>
        </div>

        {/* Área Visual (Lado Direito) */}
        <div className="asset">
          <img className="blur" src={Blur} alt="Background" />
          <div className="techs">
            <div className="tech"><img src={HTML} alt="HTML" /></div>
            <div className="tech"><img src={CSS} alt="CSS" /></div>
            <div className="tech"><img src={ReactIcon} alt="React" /></div>
            <div className="tech"><img src={VS} alt="VS Code" /></div>
            <div className="tech"><img src={JS} alt="JavaScript" /></div>
            <div className="tech"><img src={Node} alt="Node.js" /></div>
            <div className="tech"><img src={Mui} alt="MUI" /></div>
            <div className="tech"><img src={Figma} alt="Figma" /></div>
            <div className="tech"><img src={Git} alt="Git" /></div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};