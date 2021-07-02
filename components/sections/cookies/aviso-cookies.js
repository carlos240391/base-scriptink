import React from 'react'
import Link from 'next/Link'
import { ContainerCookies } from './aviso-cookies-styles';



const AvisoCookies = (props) => {

    const [visible, setVisible] = React.useState(false);

    React.useEffect(()=>{
       
        if(window.location.pathname === '/'){
            const timeout = setTimeout(()=>{
                setVisible(true)
            },7000)
        }
    },[])

    const quitAdvise = () =>{
        setVisible(false)
    }

    
    return (
        <ContainerCookies {...props}>

            <section className={
                visible ?
                "cookies-box cookies-box__active"
                :
                "cookies-box"
            }>
                <section className="cookies-box__display">
                    <section className="cookies-box__display-containerText">
                        <h1>Aviso de privacidad</h1>
                        <p>
                            Nuestro sitio web utiliza cookies para mejorar tu experiencia de navegación.
                            Al usar nuestro sitio, aceptas nuestro uso de cookies, <Link href="/privacy">ver aviso de privacidad</Link>
                        </p>

                    </section>
                    <section className="cookies-box__display-containerBtn">
                        <button onClick={quitAdvise}>ACEPTAR</button>
                    </section>
                </section>
            </section>
        </ContainerCookies>
    );
}
 
export default AvisoCookies;