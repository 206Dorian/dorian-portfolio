import React, { useState } from 'react';
import Navigation from './Navigation';
import ContactMe from './pages/ContactMe';
import ProjectCards from './pages/ProjectCards';
import Bio from './pages/Bio';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('ProjectCards');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    if (currentPage === 'ProjectCards') {
      return <ProjectCards />;
    }

    if (currentPage === 'Bio') {
      return <Bio />;
    }

    return <Resume />;


  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <Footer/>
    </div>
  );
}
