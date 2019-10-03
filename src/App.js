import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HeaderNav from './Components/Header/HeaderNav';
import Home from './Components/Home/Home';
import Udstyr from './Components/Udstyr/Udstyr';
import UdstyrListe from './Components/Udstyr/UdstyrListe';
import VerdenTemplet from './Components/Verden/VerdenTemplet';
import VerdenListe from './Components/Verden/VerdenListe';
import Footer from './Components/Footer/Footer';
import Certifikat from './Components/Certifikat/Certifikat';
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNav />

        <Route path="/home" component={Home} />
        <Route path="/udstyr" component={UdstyrListe} />
        <Route path="/verden" component={VerdenListe} />
        <Route path="/certifikat" component={Certifikat} />
        <Route path="/login" component={Login} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
