import React from 'react';
import SkillsList from './elements/_skills-list';
import Content from './elements/_content';


export default function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="wrapper">
                <Content
                 title='Skills'
                 description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'               
                />            
                <ul className="skills-list">
                    <SkillsList
                        headline='HTML'
                        description='Umgang mit semantischem HTML5/ barrierefreien Markup / Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quas quae beatae. Obcaecati unde magnam delectus nobis officia ratione nisi ea nostrum. Esse, porro. Suscipit sit ab aperiam. Tempore, iusto!'
                    />
                    <SkillsList
                        headline='CSS/Sass'
                        description='Praktische Erfahrung im Schreiben von CSS mittels Dart sass/Umsetzung nicht für Mobile First sondern für alle Viewport'
                     />
                    <SkillsList
                        headline='Javascript'
                        description='Praktische Erfahrung von nativem Javascript/ Programmierung von nativen wiederverwendbaren JavaScript-Modulen'
                    />
                    <SkillsList
                        headline='Tools'
                        description=' npm / Git/ vSCode/ IDE-PHPStorm/ Anbindung von Website an CMS system (bis her hauseigenes CMS System)'
                    />
                    <SkillsList
                        headline='sonstiges'
                        description='BasisKenntnisse PHP/ Praktische Erfahrung mit Scrum / Confluence/ Jira/  '
                    />
                    <SkillsList
                        headline='etc'
                        description='Praktische Erfahrung von nativem Javascript/ Programmierung von nativen wiederverwendbaren JavaScript-Modulen'
                    />
                </ul> 
            </div>
        </section>
    );
}