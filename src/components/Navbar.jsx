import React from 'react'
import {FaLaptopCode} from 'react-icons/fa'


import { Link } from 'react-scroll'


const Navbar = () => {

    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
    const offset=window.scrollY;

    if(offset > 500 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  },[])

    const [presionado, setPresionado] = React.useState(false)

    

    return (
        <div className={scrolled ? 'sticky' : null}>
            <nav id="nav-menu" className={presionado ? "navbar active" : "navbar"}>
                <div className="brand-title"><Link onClick={()=> setPresionado(false)} activeClass="active" to="header" spy={true} smooth={true} duration={500}><FaLaptopCode className="navbar-icon"/><span className="navbar-title-name">Alan Bersia</span><span className="navbar-title-profesion">Developer</span></Link></div>
                <a onClick={() => setPresionado(!presionado)} className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className={presionado ? 'navbar-links active' : 'navbar-links'}>
                    <ul>
                        <li><Link onClick={()=> setPresionado(!presionado)} activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                        
                        <li><Link onClick={()=> setPresionado(!presionado)} activeClass="active" to="skillset" spy={true} offset={-50}  smooth={true} duration={500}>Skill Set</Link></li>
                        
                        <li><Link onClick={()=> setPresionado(!presionado)} activeClass="active" to="contacto" spy={true} smooth={true} duration={500}>Contacto</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


