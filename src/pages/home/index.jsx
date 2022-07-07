import './styles.css';



import { Presentation } from '../../components/presentation';
import { Skills } from '../../components/skills';
import { Initial } from '../../components/initial';
import { Projects } from '../../components/projects';
import { Footer } from '../../components/footer';
import { Contact } from '../../components/contact';
import { Navbar } from '../../components/navbar';
import { SetLanguage } from '../../components/setLanguage';


export const Home = () => {
  return (
    <>
      <Navbar />
      <SetLanguage/>
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
