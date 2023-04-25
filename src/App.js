import './App.css';
import Contact from './components/Contact';
import Country from './components/Country';
import Foter from './components/Foter';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Universities from './components/Universities';


function App() {
  return (
    <div  className='app'>
     <Header />
     <Hero />
     <Universities />
     <Services />
     <Country />
     <Testimonial />
     <Contact  />
      <Foter />
    </div>
  );
}

export default App;
