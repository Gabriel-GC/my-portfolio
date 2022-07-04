import Perfil from "../../assets/photos/profile.jpg";
import Profile from "../../assets/profile/front-end-gabriel-gc.pdf";

import './styles.css';


export const Presentation = () => {
  return (
    <>
      <span id="about"></span>
      <div className="container-presentation">
        <div className="container-right">
          <div className="content-right">
            <p className='p-title'>Sobre</p>
            <p>Desenvolvedor front-end, amante de CSS e se aprimorando no back-end em Javascript React/Node.</p>
          </div>
          <div className="content-right">
            <p className='p-title'>Contato</p>
            <p>Gabriel Gonçalves Cunha</p>
            <p>goncalves.cunhaa@gmail.com</p>
            <p>+55 47 9 9996 3122</p>
          </div>
          <div className="content-right">
            <p className='p-title'>Mora em</p>
            <p>Balneário Camboriú</p>
            <p>Santa Catarina</p>
            <p>Brasil</p>
          </div>
        </div>
        <div className="container-center">
          <div className="content-center">
            <img className="perfil-img" src={Perfil} alt="Foto de perfil de Gabriel com filtro preto e branco." />
          </div>
        </div>
        <div className="container-left">
          <div className="content-left">
            <p className='p-title'>Experiência</p>
            <p>1 - 3 anos</p>
            <p>Junior</p>
          </div>
          <div className="content-left">
            <p className='p-title'>Trabalho</p>
            <p>Front End Developer</p>
            <p>Website Design</p>
            <p>Freelancer</p>
          </div>
          <div className="content-left">
            <p className='p-title'>Download</p>
            <a className='btn-down' href={Profile} download="Front-end Gabriel" target='_blank' rel='noreferrer'>
              Curriculum.pdf
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
