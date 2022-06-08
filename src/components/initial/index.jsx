import Profile from "../../assets/profile/front-end-gabriel-gc.pdf";



import './styles.css';

export const Initial = () => {
    return (
        <>
            <div className="container-name">
                <p className="p-title">Olá bem-vindo, sou</p>
                <h1>Gabriel Gonçalves Cunha</h1>
                <h2>Desenvolvedor <em>front end</em>.</h2>
                <p className="p-subtitle">Sou um desenvolvedor com foco no front-end ( se aprimorando ao back-end em Javascript React/Node ) codificando aplicações elegantes, objetivas e otimizadas para o SEO. </p>
                <a className='btn-down' href={Profile} download="Front-end Gabriel" target='_blank'>
                    Baixar resumo
                </a>
            </div>
            <div>
                <hr />
            </div>
        </>
    )
}