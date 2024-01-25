import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import sr from './ScrollReveal'
import { useEffect, useRef } from 'react'

const Contact = () => {
  const input1Ref = useRef('input1')
  const input2Ref = useRef('input2')
  const textRef = useRef('text')
  const pRef = useRef('p')
  const linkedRef = useRef('linked')
  const xRef = useRef('x')
  const gitRef = useRef('git')

  useEffect(() => {
    sr.reveal(input1Ref.current, { delay: 250, reset: true, distance: '100px', easing: 'ease-in', origin: 'top'})
    sr.reveal(input2Ref.current, { delay: 500, reset: true, distance: '100px', easing: 'ease-in', origin: 'top'})
    sr.reveal(textRef.current, { delay: 750, reset: true, distance: '100px', easing: 'ease-in', origin: 'top'})
    sr.reveal(pRef.current, { delay: 500, reset: true, distance: '100px', easing: 'ease-in', origin: 'left'})
    sr.reveal(linkedRef.current, { delay: 1000, reset: true,  easing: 'ease-in', origin: 'top'})
    sr.reveal(xRef.current, { delay: 1250, reset: true,  easing: 'ease-in', origin: 'top'})
    sr.reveal(gitRef.current, { delay: 1500, reset: true,  easing: 'ease-in', origin: 'top'})
  }, [])

  return (
    <section id='contact' className='section-container'>
        <h2 className='section-title'>Contact</h2>
        <div className='contact-container'>
            <div className='contact-information'>
                <h2>Let's Connect!</h2>
                <p ref={pRef}>If you ever want to grab a coffee (virtually) or just want a quick chat - you can find me on social media or you can send me a message here! </p>
                <ul>
                    <li ref={linkedRef}><a className='icons' href='https://www.linkedin.com/in/janar-p%C3%A4rn-175b33231/' target="_blank"><LinkedInIcon color='primary'/></a></li>
                    <li ref={xRef}><a className='icons' href="https://twitter.com/CodeDjinnu" target="_blank"><XIcon color='primary'/></a></li>
                    <li ref={gitRef}><a className='icons' href="https://github.com/Djinnu" target="_blank" ><GitHubIcon color='primary'/></a></li>
                </ul>
            </div>
            <div className='contact-form'>
                <form method="POST" action="14be38905c0493b8dc24d63533a3c329">
                    <input ref={input1Ref} name='name' type='text' placeholder='name' required/>
                    <input ref={input2Ref} name='email' type='email' placeholder='email' required/>
                    <textarea ref={textRef} name='message' placeholder='message'></textarea>
                    <div>
                        <button className='send' type='submit'>SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact