import Perfil from "../../assets/photos/profile.jpg";

import './styles.css';


export const Presentation = () => {
  return (
    <div className="container-master">
      <div className="container-right">
        <div className="content-right">
          <p className='p-title'>Biografia</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sagittis metus.</p>
        </div>

        <div className="content-right">
          <p className='p-title'>Contato</p>
          <br />
          <p>Gabriel Gonçalves Cunha</p>
          <p>goncalves.cunhaa@gmail.com</p>
          <p>+55 47 9 9996 3122</p>
        </div>

        <div className="content-right">
          <p className='p-title'>Serviços</p>
          <br />
          <p>Desenvolvedor Front End</p>
          <p>Website Design</p>
        </div>
      </div>

      <div className="container-center">
        <div className="content-center">
          <img src={Perfil} alt="" />
        </div>
      </div>

      <div className="container-left">
        <div className="content-left">
          <p className='p-title'>Experiência</p>
          <br />
          <p>Junior</p>
        </div>

        <div className="content-left">
          <p className='p-title'>Contato</p>
          <br />
          <p>Gabriel Gonçalves Cunha</p>
          <p></p>
        </div>

        <div className="content-left">
          <p className='p-title'>Serviços</p>
          <br />
          <p>Desenvolvedor Front End</p>
          <p>Website Design</p>
        </div>
      </div>
    </div>
  );
}
