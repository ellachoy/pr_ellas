import React from 'react';
import { ExternalLink } from 'react-external-link';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

export default function Footer() {
  return (
       <footer id="footer" className="section page-footer">
        <div className="wrapper">
            <div className="container">
                <ul className="contact container">               
                    <li>
                        <ExternalLink 
                            href="https://www.linkedin.com/in/ellachoy/" 
                            className="has-icon">
                            <BsLinkedin/>                           
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href="https://github.com/ellachoy" 
                            className="has-icon">
                            <BsGithub />
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink 
                            href="mailto: euiseok.choy@web.de" 
                            className="has-icon email">
                            <AiOutlineMail />     
                        </ExternalLink>
                    </li>
                </ul>
            </div>
            <div className="divide">
                <span className="copyright">&copy; EllaChoys - 2023</span>
            </div>

        </div>
    </footer>

  );
}