import React from 'react'
import sr from './ScrollReveal'
import { useEffect, useRef } from 'react'

const HomeSection = () => {
  const hiRef = useRef('hi')
  const taglineRef = useRef('tagline')
  const punchRef = useRef('punchline')
  const bannerImgRef = useRef('bannerImg')

  useEffect(() => {
    sr.reveal(hiRef.current, { delay: 250, reset: true })
    sr.reveal(taglineRef.current, { delay: 750, reset: true})
    sr.reveal(punchRef.current, { delay: 2000, reset: true })
    sr.reveal(bannerImgRef.current, { delay: 250, reset: true, distance: '100px', easing: 'ease-in', origin: 'right'})
  }, [])
  
  return (
    <section id='home' className="home">
        <div className="home-container">
            <div>
                <h1 ref={hiRef}>Hi, I'm <span className='colored-span'>Janar Pärn</span>.</h1>
                <br/>
                <p ref={taglineRef}>Let's build something amazing <span ref={punchRef} className='colored-span'>Together.</span></p>
            </div>
            <img ref={bannerImgRef} className='banner-img' src='/images/profileIcon.png' alt='icon'></img>
        </div>
    </section>
  )
}

export default HomeSection