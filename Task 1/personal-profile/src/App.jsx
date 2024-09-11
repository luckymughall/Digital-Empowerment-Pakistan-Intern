import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <About></About>
      <Hobbies></Hobbies>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
