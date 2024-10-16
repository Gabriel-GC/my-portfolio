import { i18n } from "../../translate/i18n";

import './styles.css';

import Perfil from "../../assets/photos/profile.jpg";
import Profile from "../../assets/profile/profile-gabriel-2024-share.pdf";



export const Presentation = () => {
  return (
    <>
      <span id="about"></span>
      <div className="container-presentation">
        <div className="container-right">
          <div className="content-right">
            <p className='p-title'>{i18n.t('presentation.about')}</p>
            <p>{i18n.t('presentation.about_text1')}</p>
          </div>
          <div className="content-right">
            <p className='p-title'>{i18n.t('presentation.address')}</p>
            <p>{i18n.t('presentation.address_text1')}</p>
            <p>{i18n.t('presentation.address_text2')}</p>
            <p>{i18n.t('presentation.address_text3')}</p>
          </div>
        </div>
        <div className="container-center">
          <div className="content-center">
            <img className="perfil-img" src={Perfil} alt="Foto de perfil de Gabriel com filtro preto e branco." />
          </div>
        </div>
        <div className="container-left">
          <div className="content-left">
            <p className='p-title'>{i18n.t('presentation.experience')}</p>
            <p>{i18n.t('presentation.experience_text')}</p>
          </div>
          <div className="content-left">
            <p className='p-title'>{i18n.t('presentation.download')}</p>
            <a className='btn-down' href={Profile} download="Gabriel Gonçalves Cunha" target='_blank' rel='noreferrer'>
            {i18n.t('presentation.download_button')}
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
