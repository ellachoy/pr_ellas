import React from 'react'
import jobInfo from '../content/jobInfoContent'
import { ExternalLink } from 'react-external-link'
import Content from './elements/content'

export default function Experience() {
  return (
    <div className='experience'>
      <Content title='Berufserfahrung' />
      <ul>
        {jobInfo.map(({ path, companyName, title, description, periode }) => (
          <li key={path}>
            <ExternalLink href={path}>
              <p className='headline'>
                {title}
                {companyName}
              </p>
            </ExternalLink>
            <p className='description'>{description}</p>
            <p className='periode'> {periode}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
