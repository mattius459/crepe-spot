
import React, { useContext } from 'react';
import SplitCard1 from './components/SplitCard/SplitCard1';
import SplitCard2 from './components/SplitCard/SplitCard2';
import './App.css';
import { ThemeContext } from './contexts/themecontexts';
import HorizontalScroll from './components/HorizontalScroll';
import TableCard from './components/TableCard';
import FullCard from './components/FullCard';
import FullCard2 from './components/FullCard2';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { cakes } from './components/cake';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
      <div className={`App ${theme}`}>
        <Nav />
        <Carousel cakes={cakes} />
        <HorizontalScroll />
        <FullCard />
        <TableCard />
        <div className='splitcard-container'>
          <SplitCard1 />
          <SplitCard2 />
        </div>
        <FullCard2 />
        <Footer/>
    </div>
  );
}

export default App;
