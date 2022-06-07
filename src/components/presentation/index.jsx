import Perfil from "../../assets/photos/profile.jpg";



import './styles.css';


export const Presentation = () => {
  return (
    <>
      <div className="container-name">
        <p className="p-title">Portfolio</p>
        <h1>Gabriel Gonçalves Cunha </h1>
        <p className="p-subtitle">Desenvolvedor front end</p>
      </div>
      <div className="container-presentation">
        <div className="container-right">
          <div className="content-right">
            <p className='p-title'>About</p>
            <p>Front-end developer, lover of CSS HTML and I'm getting better at the back-end in Javascript React/Node.</p>
          </div>
          <div className="content-right">
            <p className='p-title'>Contact</p>
            <p>Gabriel Gonçalves Cunha</p>
            <p>goncalves.cunhaa@gmail.com</p>
            <p>+55 47 9 9996 3122</p>
          </div>
          <div className="content-right">
            <p className='p-title'>Resides in</p>
            <p>Balneário Camboriú</p>
            <p>Santa Catarina</p>
            <p>Brazil</p>
          </div>
        </div>
        <div className="container-center">
          <div className="content-center">
            <img className="perfil-img" src={Perfil} alt="Foto de perfil de Gabriel com filtro preto e branco." />
          </div>
        </div>
        <div className="container-left">
          <div className="content-left">
            <p className='p-title'>Experience</p>
            <p>1 - 3 years</p>
            <p>Junior</p>
          </div>
          <div className="content-left">
            <p className='p-title'>Serviços</p>
            <p>Front End Developer</p>
            <p>Website Design</p>
            <p>Freelancer</p>
          </div>
          <div className="content-left">
            <p className='p-title'>teste</p>
            <p>P</p>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </>
  );
}
