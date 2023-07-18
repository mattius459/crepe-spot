import React from 'react';
import './App.css';
import HorizontalScroll from './components/HorizontalScroll';
import TableCard from './components/TableCard';

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
  return (
    <div className="App">
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