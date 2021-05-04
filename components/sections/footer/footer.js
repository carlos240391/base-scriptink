import React from 'react';
import {FooterContainer} from './footer-styles'
import Link from 'next/link'


const Footer = (props) => {

    React.useEffect(()=>{
        const newDate = new Date();
        const newYear = newDate.getFullYear();
        document.querySelector('#year').innerText = newYear
    },[])

    const {
        logoURL,
        socialOptions
    } = props.themeSettings.footerSettings

    return (  
        <FooterContainer {...props}>
            <section className="footer__caja">

                <section className="footer__caja__top">

                    <div className="footer__caja__top-logo">
                        {
                            logoURL === ''
                            ? <h1>LOGOTIPO</h1>
                            :
                            <img src={logoURL} width="150px"/>
                        }
                    </div>
                    
                    <div className="footer__caja__top-redes">
                        <div className="footer__caja__top-redes-links">
                            {
                                socialOptions.map((option, i)=>{
                                    if(option.active){
                                        return(
                                            
                                            <a  href={option.href}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                className="footer__caja__top-redes-links-link"
                                                key={i}
                                                >
                                                <i className={option.icon}></i>
                                            </a>
                                            
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>

                </section>


                <section className="footer__caja__bottom">

                    <div className="footer-item">
                        <Link href="/terms">Terminos y condiciones</Link>
                    </div>

                    <div className="footer-item">
                        <Link href="/privacy">Politica de privacidad</Link>
                    </div>

                    <div className="footer-item list-links">

                        <p>Links relacionados</p>
                        <Link href="/ruta">Otro Sitio</Link>
                        <Link href="/ruta">Nuestro blog</Link>
                        <Link href="/ruta">Conocenos</Link>
                    </div>

                    <div className="footer-item">
                        <a  href="https://script-ink.mx/" 
                            rel="noopener noreferrer"
                            target="_blank"
                            ><span id="year"></span> © Powered by ScriptInk</a>
                    </div>
                    
                </section>

            </section>
        </FooterContainer>
    );
}
 
export default Footer;