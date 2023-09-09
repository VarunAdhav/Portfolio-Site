import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Home from './components/About/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
