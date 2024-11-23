import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import { Fragment } from 'react';
import Carousel from './component/pages/carousel';
import Services from './component/pages/services/service';

function App() {

  return (
    <>
    
      <Navbar />
    <Carousel/>
    <Services />

    </>
  )
}

export default App;
