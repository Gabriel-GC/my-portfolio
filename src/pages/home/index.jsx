import './styles.css';

import { Header } from '../../components/header';
import { Presentation } from '../../components/presentation';
import { Skills } from '../../components/skills';
import { Initial } from '../../components/initial/index.jsx';


export const Home = () => {
  return (
    <>
      <Header />
      <section className="container">
        <Initial/>
        <Presentation />
        <Skills />
      </section>
    </>
  );
}
