import React from 'react';
import './HorizontalScroll.css';

const HorizontalScroll = () => {
  const images = [
    'artboard-1.svg',
    'artboard-5.svg',
    'artboard-9.svg',
    'artboard-2.svg',
    'artboard-6.svg',
    'artboard-10.svg',
    'artboard-7.svg',
    'artboard-4.svg',
    'artboard-8.svg',
    'artboard-3.svg'
  ];

  return (
    <div className="horizontal-scroll">
      {images.map((fileName, index) => (
        <img key={index} src={`${process.env.PUBLIC_URL}/images/${fileName}`} alt={`Scroll item ${index + 1}`} />
      ))}
    </div>
  );
};

export default HorizontalScroll;
