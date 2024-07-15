
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}


export default App;
