import React from 'react';
import { ExternalLink } from 'react-external-link';
import Content from './elements/content';
import companyProject from '../content/companyProjectContent';

export default function Project() {
    return (
        <section id="project" className="section project">
            <div className="wrapper">
                <Content
                    title='Projekte'               
                />
                <div className="add-info join-projects">
                     <Content
                        title='Beteiligte Firmen Projekte'               
                    />
                    <ul>
                        {companyProject.map((companyProject, index) =>(
                            <li key={index}>
                                <ExternalLink href={companyProject.path}>
                                    <h6 className="h6 headline">{companyProject.headline}</h6>
                                </ExternalLink> 
                                <p className="sub-title">{companyProject.subTitle}</p>                   
                                <p className="sub-text">{companyProject.subText}</p>
                            </li>
                        ))}                       
                    </ul>
                </div>
            </div>
        </section>
    );
}