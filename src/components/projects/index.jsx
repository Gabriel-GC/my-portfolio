import Verbenaclub from "../../assets/photos/projects/verbenaclub-project.png";


import './styles.css';


export const Projects = () => {
    return (
        <>
            <span id="projects"></span>
            <div className="container-projects">
                <div className="txt-projects">
                    <div className="p-title">Projetos</div>
                    <h4>Desenvolvimentos e participações</h4>
                </div>
                <div className="grid-projects">
                    <div className="project">
                        <img src={Verbenaclub} alt="" />
                        <div className="drop">
                            <div className="text">
                                <a href="/#" className="btn-down">Ver mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}