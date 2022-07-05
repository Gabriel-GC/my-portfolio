import React, { useState } from "react";

import "./styles.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="navbar">
            <span className="nav-contact">
                <a href="https://api.whatsapp.com/send?phone=5547999963122&text=Ol%C3%A1%2C%20vamos%20marcar%20uma%20call%20%3F" target="_blank" rel="noreferrer">CONTATO PARTICULAR</a>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/#home">Home</a>
                <a href="/#about">Sobre</a>
                <a href="/#skills">Skills</a>
                <a href="/#projects">Projetos</a>
                <a href="/#contact">Contato</a>
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
