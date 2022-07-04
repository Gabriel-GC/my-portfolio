import React, { useState } from "react";


import "./styles.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="navbar">
            <span className="nav-logo">
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
