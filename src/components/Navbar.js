import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const Navbar = () => {
  const [activeName, setActiveName] = useState('')

  const setActive = (e) => {
    setActiveName(e.target.innerHTML)
    console.log(activeName)
  }

  return (
    <header>
        <nav>
            <AnchorLink href='#home' className="navlink" style={{paddingTop: '0.5rem'}}>Janar Pärn</AnchorLink>
            <ul>
                <li onClick={(e) => setActive(e)}><AnchorLink href="#home" className={activeName === 'Home' ? 'navlinkActive' : 'navlink'}> 
                    Home
                    </AnchorLink>
                </li>
                <li onClick={(e) => setActive(e)}>
                    <AnchorLink className={activeName === 'About' ? 'navlinkActive' : 'navlink'} href='#about'>
                    About
                    </AnchorLink>
                </li>
                <li onClick={(e) => setActive(e)}>
                    <AnchorLink className={activeName === 'Skills' ? 'navlinkActive' : 'navlink'} href='#skills'>
                    Skills
                    </AnchorLink>
                </li>
                <li onClick={(e) => setActive(e)}>
                    <AnchorLink className={activeName === 'Portfolio' ? 'navlinkActive' : 'navlink'} href='#portfolio'>
                    Portfolio
                    </AnchorLink>
                </li>
                <li onClick={(e) => setActive(e)}>
                    <AnchorLink className={activeName === 'Contact' ? 'navlinkActive' : 'navlink'} href='#contact'> 
                    Contact
                    </AnchorLink>
                </li>
            </ul>  
        </nav>
    </header>
    
  )
}

export default Navbar