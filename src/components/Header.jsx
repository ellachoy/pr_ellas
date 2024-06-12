import React from 'react'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header>
      <div className='outer-wrapper'>
        <div className='container'>
          <div className='logo'>
            <span>E</span>
            <span>C</span>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  )
}
