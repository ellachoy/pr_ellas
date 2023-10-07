import { InView } from 'react-intersection-observer';
import skills from '../content/skillsContent';
import Content from './elements/content';


export default function Skills() {

    return (
        <InView>
        {({ inView, ref}) => (
            <section ref={ref} id="skills" className="skills">
                <div className={inView ? "is-in-viewport": "is-out-of-viewport"}>
                    <div className="wrapper">
                        <Content
                            title='Skills'
                            description='Ich habe seit Mai 2022 Berufserfahrung in der Web-Entwicklung mit PHP, Native Javascript, Dart Sass, Hauseigene Content Management System und Entwicklung von Styleguid durch agile Methoden gesammelt.
                            Dazu besitze Ich zwei gute Augen für´s Ästhetik und Design'            
                        />            
                        <ul className="skills-list">
                            {skills.map((skill, index) => (
                                <li key={index} 
                                >
                                    <div className="list-container">
                                        <h5 className="headline h5">{skill.headline}</h5>
                                        <p>{skill.description}</p>
                                    </div>  
                                </li>                      
                            ))}          
                        </ul> 
                    </div>         
                </div>                          
            </section>
        )}
       </InView>
    );
}