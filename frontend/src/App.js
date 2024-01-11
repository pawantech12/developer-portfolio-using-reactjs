import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import MySkills from './components/MySkills';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/skill" element={<MySkills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
