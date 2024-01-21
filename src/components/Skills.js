import React from 'react'
import Skill from './Skill'
import sr from './ScrollReveal'
import { useEffect, useRef } from 'react'


const Skills = () => {
  const frontEnd = ['CSS3', 'HTML5', 'React', 'Javascript', 'EJS']
  const backEnd = ['Node.js', 'Express', 'MongoDB']
  const dabbledIn = ['Next.js', 'PostgreSQL']

  const imgRef = useRef('img')
  const frontRef = useRef('front')
  const backRef = useRef('back')
  const dabbledRef = useRef('dabbled')

  useEffect(() => {
    sr.reveal(imgRef.current, { delay: 500, reset: true, distance: '100px', easing: 'ease-in', origin: 'right', rotate:{x:20, z:20}})
    sr.reveal(frontRef.current, { delay: 500, reset: true, distance: '100px', easing: 'ease-in', origin: 'right', rotate:{x:20, z:20}})
    sr.reveal(backRef.current, { delay: 750, reset: true, distance: '100px', easing: 'ease-in', origin: 'right', rotate:{x:20, z:20}})
    sr.reveal(dabbledRef.current, { delay: 1000, reset: true, distance: '100px', easing: 'ease-in', origin: 'right', rotate:{x:20, z:20}})
  }, [])

  return (
    <section id='skills'>
      <h2 className='section-title'>Skills</h2>
      <div className='skill-section'>
        <div className='skills-container'>
          <h3>Front End</h3>
          <div ref={frontRef} style={{display: 'flex', gap: '1rem'}}>
            {frontEnd.map(x => <Skill text={x} key={x}/>)}
          </div>
          <h3>Back End</h3>
          <div ref={backRef} style={{display: 'flex', gap: '1rem'}}>
            {backEnd.map(x => <Skill text={x} key={x}/>)}
          </div>
          <h3>Dabbled in</h3>
          <div ref={dabbledRef} style={{display: 'flex', gap: '1rem'}}>
            {dabbledIn.map(x => <Skill text={x} key={x}/>)}
          </div>  
        </div>
        <div className='skill-img-container'>
          <img ref={imgRef} src='/images/skill.jpg' alt='developer'/>
        </div>
      </div>
    </section>
  )
}

export default Skills