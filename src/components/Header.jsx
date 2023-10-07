import React, {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Symbols from './elements/symbols-list';

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => setIsOpen(!isOpen);
   const hide = () => setIsOpen(false);
   const show = () => setIsOpen(true);

   useEffect (() => {
      const closeMenu = (event) => {
         if (event.key === 'Escape') {
            setIsOpen(false);
         }
      };
      window.addEventListener('keydown', closeMenu);
      return () => {
      window.removeEventListener('keydown', closeMenu);
   };
   }, []);
   
   return (
      <header className={isOpen ? "is-nav-open" : "is-nav-close"}>
         <div className='wrapper'>
            <div className='container'>
               <div className='logo'>
                  <span>E</span>
                  <span>C</span>
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
                        <AnchorLink href='#project' onClick={hide} onBlur={hide} onFocus={show}>Projects</AnchorLink>
                     </li>
                     <li>
                        <AnchorLink href='#contact' onClick={hide} onBlur={hide} onFocus={show}>Contact</AnchorLink>
                     </li>
                  </ul>
                  <Symbols />    
            </nav>        
         </div>               
      </header>
   );
}