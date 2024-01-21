const Project = ({intro}) => {
  return (
    <article>
        <img src={intro.img} alt={intro.title} className="base"/>
        <div className="overlay">
            <h3 style={{textAlign: 'center'}}>{intro.title}</h3>
            <p style={{fontSize: 12}}>{intro.info}</p>
            <ul className='tools-used'>
                {intro.tools.map((x, i) => <li className="portfolio-list-item" key={i}>{x}</li>)}
            </ul>
            <div style={{display: 'flex', justifyContent: 'center', gap: 15}}>
                <a className="button" href={intro.liveUrl} target="_blank" rel="noreferrer">VIEW LIVE</a>
                <a className="button" href={intro.github} target="_blank" rel="noreferrer">GITHUB</a>
            </div>
        </div>
    </article>
  )
}

export default Project