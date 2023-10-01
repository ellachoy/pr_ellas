import React from 'react';
import { ExternalLink } from 'react-external-link';
import Content from './elements/content';
import about from '../content/aboutContent';
import jobInfo from '../content/jobInfoContent';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <Content
              title='About Me'
              intro='Was ich wichtige Punkte über Frontend web Entwicklung halte,' 
              quote='Ich bin Junior Frontend Webentwicklerin. Ich bin .... Ich bin offen
                dafür, verschiedene Technologien zu erlernen und sie selbst zu beurteilen. Investiere immer noch
                gerne Zeit in die Recherche. „Der Wunsch, mehr zu lernen nach dem Motto heute baue ich tolles als gestern“, treibt mich immer voran. Ich
                übernehme gerne Verantwortung und liefere immer, was versprochen wird/ oder Knowledge of
                modern web frontend technologies and standards (HTML5 / CSS3 / Javascript (ES6) /
                /etc., welche für mein Projekt relevant ist.'           
            />
          </div>       
          <ul className="lists panel">
            {about.map((about, index) => (
              <li key={index}>
                <div>
                  <h3 className="headline h4">{about.title}</h3>
                  <p>{about.description}</p>
                </div> 
              </li>
            ))}       
          </ul>
        </div>
        <div className="job-info">
          <Content
              title= 'Berufserfahrung'    
          />
          <ul>                     
            {jobInfo.map((jobInfo, index) =>(
              <li key={index}>
                <ExternalLink href={jobInfo.path}>
                  <p className="description">{jobInfo.companyName}</p>
                </ExternalLink>
                <p className= "job-title">{jobInfo.title}</p>
                <p className="sub-text" > {jobInfo.subText}</p>
              </li>
            ))}    
          </ul>         
        </div>      
      </div>
    </section>
  );
}