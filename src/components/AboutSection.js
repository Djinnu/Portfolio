import React from 'react'
import sr from './ScrollReveal'
import { useEffect, useRef } from 'react'

const AboutSection = () => {
  const pRef = useRef('p')
  const pRef2 = useRef('p2')
  const imgRef = useRef('image')
  useEffect(() => {
    sr.reveal(pRef.current, {delay: 500, reset: true, distance: '100px', easing: 'ease-in', origin: 'top'})
    sr.reveal(pRef2.current, {delay: 500, reset: true, distance: '100px', easing: 'ease-in', origin: 'top'})
    sr.reveal(imgRef.current, {delay: 500, reset: true, distance: '100px', easing: 'ease-in', origin: 'top', viewFactor: 0.3})
  }, [])
  return (
    <section id='about'>
        <h2 className="section-title">About</h2>
        <div className="about-container">
          <div className="about-me">
            <h2>Janar Pärn</h2>
            <p ref={pRef}>With a decade of experience as a prison guard, I sought new challenges. Given my enduring passion for working with computers, I identified web development as the next logical step in my career.</p>
            <p ref={pRef2}>I dedicate the majority of my leisure time to a diverse range of activities, including gaming, avid reading, indulging in binge-worthy shows, and engaging in challenging Codewars/LeetCode problems.</p>
          </div>
          <div className='about-img-container'>
            <img ref={imgRef} src='/images/Avatar.jpeg' alt='avatar' style={{borderRadius: 5, position: 'relative', bottom: '1rem', left: 0}}></img>
          </div>
        </div>
    </section>
  )
}

export default AboutSection