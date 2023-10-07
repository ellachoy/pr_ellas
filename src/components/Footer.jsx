import React from 'react';
import { ExternalLink } from 'react-external-link';
import Contact from '../content/contactContent';

export default function Footer() {
    return (
        <footer id="contact" className="page-footer">
            <div className="wrapper">
                <div className="container">
                    <ul className="contact container">
                        {Contact.map((contact, index) =>(
                            <li key={index}>
                                <ExternalLink 
                                    href={contact.path} 
                                    className="has-icon">
                                    {contact.icon}                          
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