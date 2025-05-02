import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import NewIn from './pages/NewIn/NewIn';
import Sale from './pages/Sale/Sale';
import Account from './pages/Account/Account';
import Bag from './pages/Bag/Bag';
import Product from './pages/Product/Product'


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/new-in" element={<NewIn />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/account" element={<Account />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes> 
        </main>
        <Footer />
      </div>
    </Router>
  );

}

export default App;