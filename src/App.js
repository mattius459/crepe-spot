import './App.css';

import FullCard from './components/FullCard';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { cakes } from './components/cake'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (

    <div className="App">
      <Nav />
      <FullCard />
      <Carousel cakes={cakes} />
      <Footer/>
   </div>

  );
}

export default App;