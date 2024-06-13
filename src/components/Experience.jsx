import React from 'react'
import jobInfo from '../content/jobInfoContent'
import { ExternalLink } from 'react-external-link'
import Content from './elements/content'

export default function Experience() {
  return (
    <div className='experience'>
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
  )
}
