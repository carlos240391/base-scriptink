import React from 'react'
import MapaGoogle from "../../generals/mapa/mapa_google"
import Title from "../../generals/titles/title"
import { SpacingAbout } from "../../generals/wrapper/wrapper"
import { CardDirections, DirectionsContainer } from "./directions-styles"

const Directions = (props) => {

    const calcContainer = React.useCallback(()=>{
        const sizeContainer = props.themeSettings.general.wrapperSize;
        const size = parseInt(sizeContainer.replace('px', ''));
        const cont = document.querySelector('.cont');

        if(window.innerWidth > size){
            cont.style.width = `calc(100% - ${(window.innerWidth - size)/2}px)`
        }else{
            cont.style.width = `100%`
        }
    },[props])

    React.useEffect(()=>{
        if(props.themeSettings.directionsSettings.visible){
            calcContainer();
            window.addEventListener('resize', calcContainer);
            return () =>{
                window.removeEventListener('resize', calcContainer);
            }
        }
    },[calcContainer])

    if(!props.themeSettings.directionsSettings.visible) return null

    return (  
        <>
        
        <SpacingAbout >
            <Title  {...props}
                    title="Horarios y dirección"
                    subtitle="Visitanos en nuestra tienda."
                    position="center"
                  
                    />
            <DirectionsContainer {...props}>
                <section className="directions-left">
                    <div className="cont">
                        <CardDirections {...props}>
                            <i className="fas fa-street-view"></i>
                            <h3>Encuentranos en:</h3>
                            <p>Correos #357, Colonia Evolución, Cd. Nezahualcoyotl, Estado de México</p>
                            <h3>Horarios:</h3>
                            <p>Lunes a viernes de 9am. a 7pm, sábados y domingos de 10am. a 3pm.</p>
                            <h3>Teléfonos</h3>
                            <p>Celular: 55 - 7681 - 6666</p>
                        </CardDirections>
                    </div>
                </section>
                <section className="directions-right">
                    <MapaGoogle/>
                </section>
            </DirectionsContainer>
        </SpacingAbout>
        </>
    );
}
 
export default Directions;