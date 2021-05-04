import React from 'react';
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { NavWrapper } from './navbar_styles';
import {motion} from 'framer-motion';



const NavBar = (props) => {
    

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

    
    return (
        <>
        <motion.div exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5, delay:1}}
                    
                    style={{position:sticky ? 'sticky' : 'relative', top:0, left:0, zIndex:'1000'}}
                    >
        <NavWrapper {...props}>

        <section className="nav-container">
        {logoURL === '' ?

            <h1>LOGOTIPO</h1>
            :
            <Link href="/" className="nav-logo" onClick={()=>{clickLink()}}>
                <img    src={logoURL} alt=""
                        width="150px"
                        style={{cursor:'pointer'}}/>
            </Link>
            
        }


        <section className="nav_buttons">

            <Link   href="/"
                    className="link"
                    onClick={()=>{clickLink()}}
                >Inicio</Link>

            <Link   href="/"
                    className="link"
                    onClick={()=>{clickLink()}}
                >Nosotros</Link>

            <Link   href="/"
                    className="link"
                    onClick={()=>{clickLink()}}
                >FAQ's</Link>
                
            <Link   href="/"
                    className="link"
                    onClick={()=>{clickLink()}}
                >Contacto</Link>
            
            
        </section>
        


        <button className="" onClick={clickButton} id="openclose">
            <span></span>
        </button>


        </section>
        </NavWrapper> 
        </motion.div>
        </>
    );
};

export default NavBar;