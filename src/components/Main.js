import React from 'react';
import About from './About';
import Specials from './Specials';
import Reviews from './Reviews';

export default function Main() {
  return (
    <div className="main-content">
      <Specials />
      <About />
      <Reviews />
    </div>
  );
}
