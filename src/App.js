import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { cakes } from './components/cake'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';



function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={`container ${darkMode ? 'darkMode' : ''}`}>
      <Carousel cakes={cakes} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
