import React from 'react';
import { ExternalLink } from 'react-external-link';
import footerContent from '../content/footerContent';

export default function Footer() {
  return (
       <footer id="footer" className="page-footer">
        <div className="wrapper">
            <div className="container">
                <ul className="contact container">
                    {footerContent.map((footerContent, index) =>(
                        <li key={index}>
                            <ExternalLink 
                                href={footerContent.path} 
                                className="has-icon">
                                {footerContent.icon}                          
                            </ExternalLink>
                        </li>
                    ))}               
                </ul>
            </div>
            <div className="divide">
                <span className="copyright">&copy; EllaChoys - 2023</span>
            </div>
        </div>
    </footer>

  );
}