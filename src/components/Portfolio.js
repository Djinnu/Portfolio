import React from 'react'
import Project from './Project'
import sr from './ScrollReveal'
import { useEffect, useRef } from 'react'

const projects = [{
  title: 'E-commerce clone',
  img: '/images/e-commerce.jpg',
  info: 'React-based frontend application tailored for seamless pizza ordering. This platform empowers users to personalize their pizzas by selecting toppings and quantities. The app boasts a diverse array of functionalities, ranging from a custom shopping cart to integrated geolocation, authentication, and multilingual translations.',
  tools: ['React', '0Auth', 'localStorage', 'CSS', 'MUI', 'React Router'],
  liveUrl: 'https://djinnu-pizzeria.netlify.app/',
  github: 'https://github.com/Djinnu/pizza',
}, {
  title: 'CRUD application',
  img: '/images/twitter.jpg',
  info: 'A minimalist CRUD application showcasing fundamental aspects of application development, styled with a nostalgic nod to the classic Twitter aesthetic.',
  tools: ['React', 'CSS', 'MUI'],
  liveUrl: 'https://djinnu-crud.netlify.app/',
  github: 'https://github.com/Djinnu/React_Front_End_Twitter_Clone',
}, {
  title: 'Fetch API',
  img: '/images/countries.jpg',
  info: 'An intuitive Fetch API interface that allows users to effortlessly retrieve specific data for any searched country of interest.',
  tools: ['React,', 'CSS', 'MUI', 'API'],
  liveUrl: 'https://djinnu-world-countries-data.netlify.app/',
  github: 'https://github.com/Djinnu/World_Countries_Data',
}, {
  title: 'Full Stack APP',
  img: '/images/juicy.jpg',
  info: 'A comprehensive full-stack application designed for recipe enthusiasts. This platform not only enables users to seamlessly upload, post, like, and favorite recipes but also offers an immersive experience for discovering new culinary delights.',
  tools: ['Javascript', 'CSS', 'Express', 'MongoDB', 'EJS', 'Cloudinary'],
  liveUrl: 'https://fullstack-demo-xrys.onrender.com/',
  github: 'https://github.com/Djinnu/Full-stack-project-Juicy-recipes',
}, {
  title: 'Next JS blog demo',
  img: '/images/blog.jpg',
  info: 'Simple blog demonstration built with Next.js',
  tools: ['Next.js', 'CSS', 'gray-matter'],
  liveUrl: 'https://nextjs-blog-gamma-nine.vercel.app/',
  github: 'https://github.com/Djinnu/nextjs-blog',
}, {
  title: 'Stopwatch',
  img: '/images/stopwatch.jpg',
  info: 'Elegantly styled stopwatch application',
  tools: ['React', 'CSS'],
  liveUrl: 'https://djinnu-stopwatch.netlify.app/',
  github: 'https://github.com/Djinnu/React-Stopwatch'
}]

const Portfolio = () => {
  const pro1 = useRef(projects[0].title)
  const pro2 = useRef(projects[1].title)
  const pro3 = useRef(projects[2].title)
  const pro4 = useRef(projects[3].title)
  const pro5 = useRef(projects[4].title)
  const pro6 = useRef(projects[5].title)
  const refArr = [pro1, pro2, pro3, pro4, pro5, pro6]

  useEffect(() => {
    sr.reveal(pro1.current, { delay: 250, reset: true, distance: '100px', easing: 'ease-in', origin: 'top', viewFactor: 0.3})
    sr.reveal(pro2.current, { delay: 350, reset: true, distance: '100px', easing: 'ease-in', origin: 'top', viewFactor: 0.3})
    sr.reveal(pro3.current, { delay: 450, reset: true, distance: '100px', easing: 'ease-in', origin: 'top', viewFactor: 0.3})
    sr.reveal(pro4.current, { delay: 550, reset: true, distance: '100px', easing: 'ease-in', origin: 'top'})
    sr.reveal(pro5.current, { delay: 650, reset: true, distance: '100px', easing: 'ease-in', origin: 'top'})
    sr.reveal(pro6.current, { delay: 750, reset: true, distance: '100px', easing: 'ease-in', origin: 'top'})
  }, [])

  return (
    <section id='portfolio' className="section-container">
        <h2 className="section-title">Portfolio</h2>
        <p className="learn-more">hover over any project to learn more!</p>
        <div className="projects">
          {projects.map((x, i) => {
            return (
              <div className='project-div' ref={refArr[i]} key={i}>
                <Project key={i} intro={projects[i]} />
              </div>
              )})}  
        </div>
    </section>
  )
}

export default Portfolio