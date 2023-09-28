import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Route, Link, Routes} from 'react-router-dom';
import Skills from './Skills';
import About from './About';
import Home from './Home';


export default function Header() {

   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => setIsOpen(!isOpen);
   const hide = () => setIsOpen(false);
   const show = () => setIsOpen(true);
   
  
  return (
    <header className={isOpen ? "is-nav-open" : "is-nav-close"}>
      <div className='wrapper'>
         <div className='container'>
            <div className='logo'>
               <Link to='#'>
                  <span>E</span>
                  <span>C</span>
               </Link>
            </div>
            <button className="trigger" aria-label="navigation menu toggle" onClick={() => toggleMenu() }></button>                                     
         </div>
         <nav>
               <ul>
                  <li>
                     <AnchorLink href='#home' onClick={hide} onBlur={hide} onFocus={show}>Home</AnchorLink>
                  </li>
                  <li>
                     <AnchorLink href='#about' onClick={hide} onBlur={hide} onFocus={show}>About</AnchorLink>
                  </li>
                  <li>
                     <AnchorLink href='#skills' onClick={hide} onBlur={hide} onFocus={show}>Skills</AnchorLink>
                  </li>
                  <li>
                     <AnchorLink href='#footer' onClick={hide} onBlur={hide} onFocus={show}>Footer</AnchorLink> 
                  </li>
               </ul>
               <ul className="symbols">
                <li></li>
                <li></li>
                <li></li>
            </ul>              
         </nav>
         <Routes>
            <Route path="/" component={<Home />} />
            <Route path="/about" component={<About />} />
            <Route path="/skills" component={<Skills />} />
        </Routes>  
      </div>               
   </header>
  );
}