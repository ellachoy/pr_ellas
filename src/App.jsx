import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import Loading from './components/Loading'

import './index.scss'

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Skills />
          <Project />
          <Footer />
        </>
      )}
    </>
  )
}
