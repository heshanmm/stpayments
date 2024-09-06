import React from 'react';
import ABCSchool from './aws-components/ABCSchool';
import { ThemeProvider } from '@aws-amplify/ui-react';
import studioTheme from './aws-components/studioTheme';
import Navbar from './components/Navbar';
import Hero from './components/HomePage';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';


function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Footer />
    
    <ThemeProvider theme={studioTheme}>
      <div>

        <ABCSchool />
      </div>
    </ThemeProvider>
    </div>
    
  );
}

export default App;
