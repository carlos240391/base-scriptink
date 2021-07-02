import React from 'react';
import Link from 'next/link'
import { NavWrapper } from './navbar_styles';
import {motion} from 'framer-motion';
import { Link as LinkScroll } from 'react-scroll'



const NavBar = (props) => {
    
    const [heightmenu, setHeightmenu] = React.useState(0)
    const [heightAnuncio, setHeightAnuncio] = React.useState(0)

    const clickButton = () =>{
        const navbarToggle = document.querySelector('#openclose')
        const navButtons = document.querySelector('.nav_buttons')
        navbarToggle.classList.toggle('toggle')
        navButtons.classList.toggle('open')
    }

    const clickLink = () =>{
        const navButtons = document.querySelector('.nav_buttons')
        const navbarToggle = document.querySelector('#openclose')
        if(navButtons.classList.contains('open')){
            navbarToggle.classList.toggle('toggle')
            navButtons.classList.toggle('open')
        }
    }

    const {
        logoURL,
        sticky,
    } = props.themeSettings.navbarSettings

    React.useEffect(()=>{
        const menu = document.querySelector('#menu');
        setHeightmenu(menu.getBoundingClientRect().height)
    },[])

    const moveNavBar = React.useCallback(()=>{
        const anuncio = document.querySelector('#js-anuncio');
        setHeightAnuncio(anuncio.getBoundingClientRect().height);

        const moveScroll = () =>{
            const nav = document.querySelector('#s-nav');
            const logoMenu = document.querySelector('#logo-menu');
            const links = nav.querySelectorAll('a');
            const menuMobile = window.getComputedStyle(document.querySelector('#m-menu','::before'));
            console.log(menuMobile.get);
          
            if(window.scrollY > (nav.getBoundingClientRect().height + (heightAnuncio * 2))){
                nav.style.transform = `translateY(0px)`;
                nav.style.top= `0px`;
                nav.style.background = `white`;
                nav.classList.add('active-navbar');

                logoMenu.src = '/img/logo_svg.svg';
                links.forEach((link)=> link.style.color = 'red');
                //menuMobile.style.background = 'red'
            }else{
                nav.style.transform = `translateY(${-window.scrollY}px)`;
                nav.style.top = `${heightAnuncio}px`;
                nav.style.background = `none`;
                nav.classList.remove('active-navbar');

                logoMenu.src = '/img/logo.svg';
                links.forEach((link)=> link.style.color = 'white');
            }
        } 
        moveScroll()
    },[heightAnuncio])

    React.useEffect(()=>{
        moveNavBar();
        window.addEventListener('scroll', moveNavBar);
        return () => window.addEventListener('scroll', moveNavBar);
    },[moveNavBar])
    
    
    return (
        <>
       
        <motion.div exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5, delay:1}}
                    
                    style={{position:sticky ? 'sticky' : 'relative', top:0, left:0, zIndex:'1000'}}
                    >
        <NavWrapper {...props} id="s-nav" style={{
            top: heightAnuncio + 'px'
        }}>

        <section className="nav-container" id="menu">
        {logoURL === '' ?

            <h1>LOGOTIPO</h1>
            :
            <Link href="/" className="nav-logo" onClick={()=>{clickLink()}}>
                <img    src={logoURL} alt=""
                        id="logo-menu"
                        style={{cursor:'pointer'}}
                        className="logo-navbar"
                        />
            </Link>
            
        }


        <section className="nav_buttons">
            

            <LinkScroll     to="inicio"
                            spy={true}
                            smooth={true}
                            offset={-heightmenu}
                            duration={1000}
                            className="link"
                            onClick={()=>{clickLink()}}
                            activeClass="active-link"
                            >Inicio</LinkScroll>
            

            <LinkScroll     to="about"
                            spy={true}
                            smooth={true}
                            offset={-heightmenu}
                            duration={1000}
                            className="link"
                            onClick={()=>{clickLink()}}
                            activeClass="active-link"
                            >Nosotros</LinkScroll>
            

            <LinkScroll     to="galeria"
                            spy={true}
                            smooth={true}
                            offset={-heightmenu}
                            duration={1000}
                            className="link"
                            onClick={()=>{clickLink()}}
                            activeClass="active-link"
                            >Galería</LinkScroll>

            {/* <Link   href="/"
                    className="link"
                    onClick={()=>{clickLink()}}
                >Blog</Link> */}
                
            <LinkScroll     to="contacto"
                            spy={true}
                            smooth={true}
                            offset={-heightmenu}
                            duration={1000}
                            className="link"
                            onClick={()=>{clickLink()}}
                            activeClass="active-link"
                            >Contacto</LinkScroll>
            
            
        </section>
        


        <button className="" onClick={clickButton} id="openclose">
            <span id="m-menu"></span>
        </button>


        </section>
        </NavWrapper> 
        </motion.div>
        </>
    );
};

export default NavBar;