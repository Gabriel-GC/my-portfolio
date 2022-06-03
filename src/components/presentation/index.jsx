import Perfil from "../../assets/photos/profile.jpg";

import './styles.css';


export const Presentation = () => {
  return (
    <div className="container-presentation">
      <div className="container-right">
        <div className="content-right">
          <p className='p-title'>Biografia</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sagittis metus.</p>
        </div>

        <div className="content-right">
          <p className='p-title'>Contato</p>
          <p>Gabriel Gonçalves Cunha</p>
          <p>goncalves.cunhaa@gmail.com</p>
          <p>+55 47 9 9996 3122</p>
        </div>

        <div className="content-right">
          <p className='p-title'>Serviços</p>
          <p>Desenvolvedor Front End</p>
          <p>Website Design</p>
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
          <p>Junior</p>
        </div>

        <div className="content-left">
          <p className='p-title'>Reside em</p>
          <p>Baneário Camboriú</p>
          <p>Santa Catarina</p>
          <p>Brazil</p>
        </div>

        <div className="content-left">
          <p className='p-title'>Serviços</p>
          <p>Desenvolvedor Front End</p>
          <p>Website Design</p>
        </div>
      </div>
    </div>
  );
}
