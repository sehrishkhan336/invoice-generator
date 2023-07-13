import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Clients from './pages/Clients';
import Invoice from './pages/Invoice';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Clients') {
      return <Clients />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Invoice') {
      return <Invoice />;
    }
    if (currentPage === 'Signup') {
      return <Signup />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
