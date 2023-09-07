import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import "./styles/style.css";

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/react-PhotoWebsite' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        {/* 添加 index 路由 */}
        {/* <Route path='*' element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
