import React from 'react';
import {Link} from 'react-router-dom';
import Content from './elements/_content';
import List from './elements/_list';

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
            <List
               title= 'Kommunikation'
               description= 'duch Kommunikakation, minimiert fehler und spart Zeit '
            />
            <List
               title= 'Starke Mental'
               description= 'Fokusiere ich auf meine tägliche Entwicklung!. alles sind nicht perfekt'
            />
            <List
               title= 'Aktive Lernen'
               description= 'Schokolade fallt nicht aus dem Himmel! immer raschachieren nach neues'
            />
          </ul>
        </div>
        <div className="job-info">
          <Content
              title= 'Berufserfahrung'    
          />
          <ul>            
            <li>
              <Content
                description='Ryze Digital (Electronic-Minds) als Junior Frontend Web Entwickler'
                subText='Mai 2022 - heute'      
              />
            </li>
            <li>
              <Content
                description='Jato Dynamics als Automotive Data Analyst'
                subText='Jun 2018 - März 2021'      
              />
            </li>
            <li>
              <Content
                description='Hyundai Mobis als Automotive Data Analyst'
                subText='Dez 2013 - Juni 2017'      
              />
            </li>
          </ul>         
        </div>      
      </div>
    </section>
  );
}