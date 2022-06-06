import Perfil from "../../assets/photos/profile.jpg";
import Texture from "../../assets/icons/zigzag-lines-in-side-view-position.png";


import './styles.css';


export const Presentation = () => {
  return (
    <>
      <div className="container-presentation">
        <div className="container-right">
          <div className="content-right">
            <p className='p-title'>Sobre</p>
            <p>Desenvolvedor front-end, amante do CSS HTML e estou me aprimorando ao back-end em Javascript React/Node.</p>
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
            <p>Freelancer</p>
          </div>
        </div>
        <div className="container-center">
          <div className="content-center">
            <div className="textura"> <img src={Texture} alt="Textura em zig-zag" /></div>
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
            <p className='p-title'>Reside em</p>
            <p>Balneário Camboriú</p>
            <p>Santa Catarina</p>
            <p>Brasil</p>
          </div>
          <div className="content-left">
            <p className='p-title'>Teste</p>
            <p>Website Design</p>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </>
  );
}
