import './styles.css';

import { Header } from '../../components/header';
import { Presentation } from '../../components/presentation';
import { Skills } from '../../components/skills';


export const Home = () => {
  return (
    <>
      <Header />
      <section className="container">
        <Presentation />
        <Skills />
      </section>
    </>
  );
}
