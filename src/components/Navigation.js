import React from 'react';

export default function Navigation() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (

    <nav className="main-header-menu"
    style={{
      display: 'flex',
      fontFamily: 'helvetica',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }}>
      
      
        <btn style={linkStyle}>
          <a href="#">Home</a>
        </btn>

        <btn style={linkStyle}>
          <a href="#">About</a>
        </btn>

        <btn style={linkStyle}>
          <a href="#">Contact</a>
        </btn>

      

    </nav>


  );
}
