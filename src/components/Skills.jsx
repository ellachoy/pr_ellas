import { InView } from 'react-intersection-observer';
import skills from '../content/skillsContent';
import Content from './elements/content';


export default function Skills() {

    return (
        <InView>
        {({ inView, ref}) => (
            <section ref={ref} id="skills" className="section skills ">
                <div className={inView ? "is-in-viewport": "is-out-of-viewport"}>
                    <div className="wrapper">
                        <Content
                            title='Skills'
                            intro='Folgende Skills sind, welche ich seit 2021 gelernt habe und noch täglich verbessert, sind. 
                            Ausserdem besitze ich Auge für´s Ästhetik und Design'            
                        />            
                        <ul className="skills-list">
                            {skills.map((skill, index) => (
                                <li key={index} 
                                >
                                    <div className="container">
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