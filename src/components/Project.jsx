import React from 'react';
import { ExternalLink } from 'react-external-link';
import Content from './elements/content';
import companyProject from '../content/companyProjectContent';
import Slider from './Slider';

export default function Project() {
    return (
        <section id="project" className="project">
            <div className="wrapper">
                <Content
                    title='Projekte'               
                />
                <Slider />
                <div className="add-info join-projects">
                    <Content
                        title='Firmen Projekte'               
                    />
                    <ul>
                        {companyProject.map((companyProject, index) =>(
                            <li key={index}>
                                {companyProject.path? 
                                    <ExternalLink href={companyProject.path}>
                                        <h6 className="h6 headline">{companyProject.headline}</h6>
                                    </ExternalLink> : <h6 className="h6 headline">{companyProject.headline}</h6>
                                }
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