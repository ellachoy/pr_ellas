import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

import './index.scss'

export default function App() {
  return (
    <>
      <Navigation/>
      <Home />
      <About />
      <Skills />
    </>
    );
}