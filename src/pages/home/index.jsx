import './styles.css';

import { Presentation } from '../../components/presentation';
import { Name } from '../../components/name';
import { Header } from '../../components/header';

export const Home = () => {
  return (
    <>
      <Header />
      <section className="container">
        <Name />
        <Presentation />
      </section>
    </>
  );
}
