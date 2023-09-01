import React from 'react';
import logo from './logo512.png';
import './App.css';
import TopNavbar from './components/TopNavBar/TopNavBar';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <TopNavbar userName ="Steve"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's get building!
        </p>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
