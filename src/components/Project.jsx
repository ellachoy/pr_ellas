import React from 'react';
import { ExternalLink } from 'react-external-link';
import Content from './elements/content';

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
                         <li>
                            <ExternalLink href='https://www.klueber.com/de/de/'>
                               <h6 className="h6 headline">Klüber Lubrication</h6>
                            </ExternalLink> 
                             <p className="sub-title">Wartungsseite</p>                   
                            <p className="sub-text">Sep 2022 - Sep 2022</p>
                        </li>
                        <li>
                            <ExternalLink href='https://www.diehl.com/group/de/'>
                               <h6 className="h6 headline">Diehl</h6>
                            </ExternalLink> 
                             <p className="sub-title">Website Relaunch</p>                   
                            <p className="sub-text">Dez 2022 - März 2023</p>
                        </li>
                        <li>
                             <h6 className="h6 headline">Diehl-Intranet</h6>
                             <p className="sub-title">Intranet Nacharbeitung</p>                   
                            <p className="sub-text">Aug 2023 - Sep 2023</p>
                        </li>
                        <li>
                            <h6 className="h6 headline">Ribe-Intranet</h6>
                             <p className="sub-title">Intranet Nacharbeitung</p>                   
                            <p className="sub-text">Sep 2023 - Sep 2023</p>
                        </li>
                        <li>
                            <h6 className="h6 headline">Deutshce Extrakt Cafea-Intranet</h6>
                             <p className="sub-title">Intranet Relaunch</p>                   
                            <p className="sub-text">April 2023 - heute</p>
                        </li>

                    </ul>
                   

                </div>
                

            </div>
        </section>
    );
}