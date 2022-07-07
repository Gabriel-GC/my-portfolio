
import React from "react";
import BR from "../../assets/icons/flags/brasil.png";
import Spain from "../../assets/icons/flags/espanha.png";
import Usa from "../../assets/icons/flags/estados-unidos.png";
import { i18n } from "../../translate/i18n";
import './styles.css';

const I18N_STORAGE_KEY = 'i18nextLng'

export const SetLanguage = () => {

    const handleSelectChange = (value) => {
        console.log(value)
        localStorage.setItem(
            I18N_STORAGE_KEY,
            value
        )
        document.location.reload(true)
    }

    return (
        <div className="set-container">
            <div className="set-content">
                {i18n.language === "pt"
                    ? <img onClick={() => handleSelectChange('pt')} value="pt" className="flagBR active" src={BR} alt="brazil" />

                    : <img onClick={() => handleSelectChange('pt')} value="pt" className="flagBR " src={BR} alt="brazil" />
                }

                {i18n.language === "en"
                    ? <img onClick={() => handleSelectChange('en')} value="en" className="flagEN active" src={Usa} alt="usa" />

                    : <img onClick={() => handleSelectChange('en')} value="en" className="flagEN " src={Usa} alt="usa" />

                }
                {i18n.language === "es"
                    ? <img onClick={() => handleSelectChange('es')} value="es" className="flagES active" src={Spain} alt="espanha" />

                    : <img onClick={() => handleSelectChange('es')} value="es" className="flagES " src={Spain} alt="espanha" />

                }
            </div>
        </div>
    );
}