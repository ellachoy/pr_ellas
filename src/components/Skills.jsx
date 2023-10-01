import React, { useRef, createRef } from 'react';
import skills from '../content/skillsContent';
import Content from './elements/content';


export default function Skills() {
    const skillRefs = useRef([]);
    skillRefs.current = skills.map(
        (review, i) => skillRefs.current[i] ?? createRef()
    ); 


    return (
        <section id="skills" className="section skills">
            <div className="wrapper">
                <Content
                    title='Skills'
                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'               
                />            
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <div className="container">
                                <h5 className="headline h5">{skill.headline}</h5>
                                <p>{skill.description}</p>
                            </div>  
                        </li>                      
                    ))}          
                </ul> 
            </div>
        </section>
    );
}