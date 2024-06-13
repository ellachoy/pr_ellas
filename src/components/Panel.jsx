import { InView } from 'react-intersection-observer'
import React from 'react'
import about from '../content/aboutContent'

export default function Panel() {
  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref} className='lists panel'>
          <ul className={inView ? 'is-in-view' : 'is-out-of-view'}>
            {about.map((about, index) => (
              <li key={index}>
                <div>
                  <h3 className='headline h6'>{about.title}</h3>
                  <p className='description'>{about.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </InView>
  )
}
