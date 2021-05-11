import StarRating from './components/use-state/StartRating';
import Section from './components/use-effect/Section';
import Users from './components/use-effect/Users';
import Incrementor from './components/use-reducer/Incrementor';
import Messenger from './components/use-reducer/Messenger';
import ColorForm from './components/use-ref/ColorForm';
import Trees from './components/use-context/Trees';

import './App.css';

function App() {
  return (
    <>
      <StarRating totalStars={5} />
      <Section />
      <Users />
      <Incrementor />
      <Messenger />
      <ColorForm />
      <Trees />
    </>
  );
}

export default App;
