
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Projects from './components/project';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Education />
      <Projects />
    </div>
  );
}


export default App;
