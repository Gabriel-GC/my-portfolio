import './styles.css';

export const Header = () => {
    return (
        <div className="container-navbar">
            <div className="navbar">
                <div className="content-navbar">
                    <a href="https://api.whatsapp.com/send?phone=5547999963122&text=Ol%C3%A1%2C%20vamos%20marcar%20uma%20call%20%3F" target="_blank" rel="noreferrer" >Entrar em contato agora</a>
                </div>
                <ul>
                    <li>
                        <a href="/#home">Home</a>
                    </li>
                    <li>
                        <a href="/#about">Sobre</a>
                    </li>
                    <li>
                        <a href="/#skills">Skills</a>
                    </li>
                    <li>
                        <a href="/#projects">Projetos</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
