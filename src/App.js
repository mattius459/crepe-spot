import React from 'react';
import SplitCard1 from './components/SplitCard/SplitCard1';
import SplitCard2 from './components/SplitCard/SplitCard2';
import './App.css';

function App() {
  return (
    <div className='splitcard-container'>
      <SplitCard1 />
      <SplitCard2 />
    </div>
  );
}

export default App;

