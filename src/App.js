import React from 'react';

import { AboutUs, Cap, Schedule, Footer, Gallery, Header, Intro, Awards, Squard } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Squard />
    <Cap />
    <Intro />
    <Awards />
    <Gallery />
    <Schedule />
    <Footer />
  </div>
);

export default App;
