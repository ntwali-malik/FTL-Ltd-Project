import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CarouselComponent from './Components/CarouselComponent ';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Servce from './Pages/Servce';
import Gallery from './Pages/Gallery';
import SoftwareDevelopment from './Pages/SoftwareDevelopment';
import Networking from './Pages/Networking';
import CanalDstv from './Pages/CanalDstv';
import DigitalSecurity from './Pages/DigitalSecurity';
import Internship from './Pages/Internship';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/service' element = {<Servce />} />
          <Route path='/gallery' element = {<Gallery />} />
          <Route path='/softwareDevelopment' element = {<SoftwareDevelopment />} />
          <Route path='/network' element = {<Networking />} />
          <Route path='/canalDstv' element = {<CanalDstv />} />
          <Route path='/digitalSecurity' element = {<DigitalSecurity />} />
          <Route path='/internship' element = {<Internship />} />
        </Routes>
      </Router>
  );
}

export default App;
