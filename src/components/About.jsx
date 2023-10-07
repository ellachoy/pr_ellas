import React from 'react';
import { ExternalLink } from 'react-external-link';
import Content from './elements/content';
import about from '../content/aboutContent';
import jobInfo from '../content/jobInfoContent';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <Content
              title='About Me'
              intro='Welche Punkte ich als Frontend Web-Entwickler/in für wichtig halte:' 
              quote='Ich bin Ella und Junior Frontend Webentwicklerin. Ich brenne seit 2021 als Quereinsteigerin in Frontend Web Entwicklung.
                  Ich bin offen dafür, verschiedene Technologien zu erlernen, welche für meine Arbeit relevant sind. Investiere 
                gerne Zeit in die Recherche. „Der Wunsch, mehr zu lernen nach dem Motto heute baue ich noch tolles als gestern“.
                und durch langjährigen Berufserfahrung in Automobil Branche, mir ist bewusst, "Kommunikation", "Starke Metal zu besitzen" und "Aktive Lernen"
                tolle Synergie macht für meine Arbeit.
             '           
            />
          </div>       
          <ul className="lists panel">
            {about.map((about, index) => (
              <li key={index}>
                <div>
                  <h3 className="headline h5">{about.title}</h3>
                  <p>{about.description}</p>
                </div> 
              </li>
            ))}       
          </ul>
        </div>
        <div className="add-info">
          <Content
              title= 'Berufserfahrung'    
          />
          <ul>                     
            {jobInfo.map((jobInfo, index) =>(
              <li key={index}>
                <ExternalLink href={jobInfo.path}>
                  <h6 className="h6 headline">{jobInfo.companyName}</h6>
                </ExternalLink>
                <p className= "sub-title">{jobInfo.title}</p>
                <p className="sub-text" > {jobInfo.subText}</p>
              </li>
            ))}    
          </ul>         
        </div>      
      </div>
    </section>
  );
}