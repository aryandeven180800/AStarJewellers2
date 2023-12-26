// src/App.tsx
import React from 'react';
import Header from './components/Header'; // Correct the path
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <Footer />
      <AboutUs />
    </div>
  );
};

export default App;

