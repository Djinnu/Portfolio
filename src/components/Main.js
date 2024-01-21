import React from 'react'
import HomeSection from './HomeSection'
import AboutSection from './AboutSection'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'

export const Main = () => {
  return (
    <main>
        <HomeSection/>
        <AboutSection/>
        <Skills/>
        <Portfolio/>
        <Contact/>
    </main>
  )
}

export default Main