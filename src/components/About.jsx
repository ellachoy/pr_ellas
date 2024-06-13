import React from 'react'
import { ExternalLink } from 'react-external-link'
import Content from './elements/content'
import jobInfo from '../content/jobInfoContent'
import EllaFoto from '../assets/ella-foto.jpeg'
import Panel from './Panel'

export default function About() {
  return (
    <section id='about' className='about'>
      <div className='wrapper'>
        <Content
          title='About Me'
          intro='Welche Punkte ich als Web-Entwickler/in für wichtig halte:'
        />
        <div className='container'>
          <div className='image'>
            <img src={EllaFoto} alt='ella' />
          </div>
          <div className='quote'>
            <Content
              quote='Ich bin Ella und Frontend Webentwicklerin. Ich brenne seit 2021 als Quereinsteigerin in Frontend Web Entwicklung.
                    Seit dem Quereinsieg treibt mich täglich das Motto: "Heute baue ich wieder etwas grossartiges!".
                    Hierfür investiere ich gerne meine Zeit um neue Technologien zu erlernen und es anzuwenden.
                    Natürlich ist es nicht einfach, ständig zu lernen und sich zu verbessern.
                   Aber tue ich das, weil mein Herz für die Webentwicklung schlägt.
                    Frontend-Webentwicklung ist etwas von Kunst und Magie ...
                    deshalb sind mir drei Kernpunkte wichtig geworden:'
            />
          </div>
        </div>
        <Panel />

        <div className='add-info'>
          <Content title='Berufserfahrung' />
          <ul>
            {jobInfo.map((jobInfo, index) => (
              <li key={index}>
                <ExternalLink href={jobInfo.path}>
                  <h6 className='h6 headline'>{jobInfo.companyName}</h6>
                </ExternalLink>
                <p className='sub-title'>{jobInfo.title}</p>
                <p className='sub-text'> {jobInfo.subText}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
