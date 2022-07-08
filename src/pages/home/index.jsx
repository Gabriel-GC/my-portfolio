import './styles.css';

import React, { useEffect } from "react";

import { Presentation } from '../../components/presentation';
import { Skills } from '../../components/skills';
import { Initial } from '../../components/initial';
import { Projects } from '../../components/projects';
import { Footer } from '../../components/footer';
import { Contact } from '../../components/contact';
import { Navbar } from '../../components/navbar';
import { SetLanguage } from '../../components/setLanguage';

import { i18n } from "../../translate/i18n";
const I18N_STORAGE_KEY = "i18nextLng";



export const Home = () => {

  let mobWidth = 789;

  const handleSelectChange = (value) => {
    console.log(value);
    localStorage.setItem(I18N_STORAGE_KEY, value);
    document.location.reload(true)
  };

  useEffect(() => {
    console.log(i18n.language);
    if (i18n.language === "pt-BR") {
      console.log("caiu");
      handleSelectChange("pt");
    }
    if (window.outerWidth < mobWidth) {
      if (i18n.language !== "en") {
        handleSelectChange("en");
      }
    }
  });

  return (
    <>
      <Navbar />
      <SetLanguage/>
      <section className="container">
        <Initial />
        <Presentation />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </>
  );
}
