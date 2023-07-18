import React, { useContext } from 'react';
import './App.css';
import { ThemeContext } from './contexts/themecontexts';
import HorizontalScroll from './components/HorizontalScroll';
import TableCard from './components/TableCard';
import FullCard from './components/FullCard';
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
      {/* <TableCard /> */}
      <Footer/>
   </div>
  );
}

export default App;
