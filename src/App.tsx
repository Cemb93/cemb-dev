import { NavBar } from './components/NavBar/NavBar';
import { Presentation } from './components/Presentation/Presentation';
import { Skills } from './components/Skills/Skills';
// import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import Experiences from './components/Experiences/Experiences';

function App() {
  return (
    <div>
      <NavBar />
      <Presentation />
      <Skills />
      {/* <Projects /> */}
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
