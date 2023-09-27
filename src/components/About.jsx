import React from 'react';
import Content from './elements/_content';
import List from './elements/_list';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <Content
              title='About ME'
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
      </div>
    </section>
  );
}