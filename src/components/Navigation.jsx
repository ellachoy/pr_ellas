import React from 'react';
import { Link } from 'react-router-dom';


export default function Navigation() {
  
  return (
    <header className='header'>
      <div className='wrapper'>
         <div className='container'>
            <div className='logo'>
               <Link to='/'>
               <span>E</span>
               <span>C</span>
            </Link>
            </div>           
            <nav className='nav-bar'>
               <ul className='nav-menu'>
                  <li>
                     <Link to='/' id="home" className='home active'>
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link to='/About' id="about" className='about'>About</Link>
                  </li>
                  <li>
                     <Link to='/Footer' id="footer" className='footer'>Footer</Link> 
                  </li>
               </ul>           
            </nav>
            <button className="trigger" aria-label="navigation menu toggle"></button>        
         </div>  
      </div>               
   </header>
  );
}