import "./styles.css";
import { i18n } from "../../translate/i18n";

export const Initial = () => {
  return (
    <>
      <span id="home"></span>
        <div className="container-name">
          <p className="p-title">{i18n.t("initial.wellcome")}</p>
          <h1>{i18n.t("initial.h1")}</h1>
          <h2>
            {i18n.t("initial.h2")} <em>{i18n.t("initial.em")}</em>
          </h2>
          <p className="p-subtitle">{i18n.t("initial.p")}</p>
        </div>

      <div className="mouse_scroll">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="m_scroll_arrows one"></span>
          <span className="m_scroll_arrows two"></span>
          <span className="m_scroll_arrows tre"></span>
        </div>
      </div>
      <hr />
    </>
  );
};
