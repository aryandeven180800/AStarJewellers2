// src/components/Header.tsx
import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo">A-Star Jewellers</div>
      <nav className="nav-container">
        <div className="nav-item">Rings</div>
        <div className="nav-item">Diamonds</div>
        <div className="nav-item">Necklace</div>
        <div className="nav-item">Polished & Rough Diamonds</div>
        <div className="nav-item">About Us</div>
        <div className="nav-item">Contact Us</div>
      </nav>
    </header>
  );
};

export default Header;
