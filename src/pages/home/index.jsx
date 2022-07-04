import './styles.css';



import { Presentation } from '../../components/presentation';
import { Skills } from '../../components/skills';
import { Initial } from '../../components/initial';
import { Projects } from '../../components/projects';
import { Footer } from '../../components/footer';
import { Contact } from '../../components/contact';
import { Navbar } from '../../components/navbar';


export const Home = () => {
  return (
    <>
        <Navbar />
        <section className="container">
          <Initial />
          <Presentation />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </section>
    </>
  );
}
