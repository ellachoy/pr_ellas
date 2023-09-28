import {useState} from 'react';
import { Link } from 'react-router-dom';


export default function Navigation() {

   const [isOpen, setMenu] = useState(false);

   const toggleMenu = () => {
      setMenu(!isOpen);
   }
  
  return (
    <header className={isOpen ? "is-nav-open" : "is-nav-close"}>
      <div className='wrapper'>
         <div className='container'>
            <div className='logo'>
               <Link to='/'>
                  <span>E</span>
                  <span>C</span>
               </Link>
            </div>
            <button className="trigger" aria-label="navigation menu toggle" onClick={() => toggleMenu() }></button>                                     
         </div>
         <nav>
               <ul>
                  <li>
                     <Link to='/'>Home</Link>
                  </li>
                  <li>
                     <Link to='/About'>About</Link>
                  </li>
                  <li>
                     <Link to='/Footer'>Footer</Link> 
                  </li>
               </ul>
               <ul className="symbols">
                <li></li>
                <li></li>
                <li></li>
            </ul>              
         </nav>  
      </div>               
   </header>
  );
}