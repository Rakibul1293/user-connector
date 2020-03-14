import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import User from './components/User/User';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <User></User>
      <Footer></Footer>
    </div>
  );
}

export default App;
