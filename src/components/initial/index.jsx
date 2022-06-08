import Profile from "../../assets/profile/front-end-gabriel-gc.pdf";




import './styles.css';

export const Initial = () => {
    return (
        <>
            <span id="home"></span>
            <div className="container-name">
                <p className="p-title">Olá bem-vindo, sou</p>
                <h1>Gabriel Gonçalves Cunha</h1>
                <h2>Desenvolvedor <em>front end</em>.</h2>
                <p className="p-subtitle">Sou um desenvolvedor com foco no front-end ( se aprimorando ao back-end em Javascript React/Node ) codificando aplicações elegantes, objetivas e otimizadas para o SEO. </p>
                <a className='btn-down' href={Profile} download="Front-end Gabriel" target='_blank' rel='noreferrer'>
                    Baixar resumo
                </a>
            </div>
            <div className="mouse_scroll">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div>
                    <span className="m_scroll_arrows one"></span>
                    <span className="m_scroll_arrows two"></span>
                    <span className="m_scroll_arrows tre"></span>
                </div>
            </div>
            <div>
                <hr />
            </div>
        </>
    )
}