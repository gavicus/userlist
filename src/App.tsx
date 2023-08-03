import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './ui/pages/home/home';
import UserPage from './ui/pages/user/user-page';
import './App.css';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <nav>
          <Link to="/">home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
      <div className="learn-react">learn react</div>
    </div>
  );
}

export default App;
