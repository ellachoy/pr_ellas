import React from 'react';
import { Link } from 'react-router-dom';


export default function Navigation() {
  
  return (
    <header className='header'>
      <div className='wrapper'>
         <div className='container'>
             <Link to='/' className='logo'>
               <span>E</span>
               <span>C</span>
            </Link>
            <nav>
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
         </div>  
      </div>               
   </header>
  );
}