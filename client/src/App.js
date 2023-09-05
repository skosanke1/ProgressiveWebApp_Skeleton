import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo512.png';
import TopNavbar from './components/TopNavBar/TopNavBar';
import MobileNavigator from './components/MobileNavigator/MobileNavigator';
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsOpen(false); // Close the menu when switching view
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isMobile ? <MobileNavigator userName="John" isOpen={isOpen} /> : <TopNavbar userName="John" />}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's get building!
        </p>
      </header>
      <Footer></Footer>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
