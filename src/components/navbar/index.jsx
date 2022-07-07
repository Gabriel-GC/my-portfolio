import React, { useState } from "react";
import { i18n } from "../../translate/i18n";


import "./styles.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="navbar">
            <span className="nav-contact">
                <a href="https://api.whatsapp.com/send?phone=5547999963122&text=Ol%C3%A1%2C%20vamos%20marcar%20uma%20call%20%3F" target="_blank" rel="noreferrer">{i18n.t("navbar.privateContact")}</a>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/#home">{i18n.t("navbar.home")}</a>
                <a href="/#about">{i18n.t("navbar.about")}</a>
                <a href="/#skills">{i18n.t("navbar.skills")}</a>
                <a href="/#projects">{i18n.t("navbar.projects")}</a>
                <a href="/#contact">{i18n.t("navbar.contact")}</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};
