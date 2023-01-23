import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href=".ProjectCards"
          onClick={() => handlePageChange('ProjectCards')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'ProjectCards' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Bio"
          onClick={() => handlePageChange('Bio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Bio' ? 'nav-link active' : 'nav-link'}
        >
          Bio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#ContactMe"
          onClick={() => handlePageChange('ContactMe')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}

export default Navigation;






























// import React from 'react';

// export default function Navigation() {
//   const linkStyle = { border: '1px black', padding: '5px' };

//   return (

//     <nav className="main-header-menu"
//     style={{
//       // display: 'flex',
//       // fontFamily: 'helvetica',
//       // flexDirection: 'row',
//       // alignItems: 'center',
//       // justifyContent: 'flex-start',
//     }}>
      
      
//         <btn style={linkStyle}>
//           <a href="#">Home</a>
//         </btn>

//         <btn style={linkStyle}>
//           <a href="#">About</a>
//         </btn>

//         <btn style={linkStyle}>
//           <a href="#">Contact</a>
//         </btn>

      

//     </nav>


//   );
// }
