import './styles.css';

import { Presentation } from '../../components/presentation';
import { Name } from '../../components/name';


export const Home = () => {
  return (
    <section className="container">
      <Name />
      <Presentation />
    </section>
  );
}
