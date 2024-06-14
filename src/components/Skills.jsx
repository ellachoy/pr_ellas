import { InView } from 'react-intersection-observer'
import skills from '../content/skillsContent'
import Content from './elements/content'

export default function Skills() {
  return (
    <InView>
      {({ inView, ref }) => (
        <section ref={ref} id='skills' className='skills'>
          <div className={inView ? 'is-in-viewport' : 'is-out-of-viewport'}>
            <div className='wrapper'>
              <Content
                title='Skills'
                description='Berufserfahrung in der Webentwicklung mit PHP, Native Javascript, Dart Sass, CMS, React und Entwicklung von Styleguid und Storybook durch agile Methoden.
                            Dazu besitze Ich zwei gute Augen für´s Ästhetik und Design'
              />
              <ul className='skills-list'>
                {skills.map((skill, index) => (
                  <li key={index}>
                    <div className='list-container'>
                      <h5 className='headline h5'>{skill.headline}</h5>
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
  )
}
