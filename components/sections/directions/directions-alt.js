import Title from "../../generals/titles/title"
import { GContainer, GWrapper, SpacingAbout } from "../../generals/wrapper/wrapper"
import {DirectionAltContainer, FullMapContainer} from './directions-styles'
import MapaGoogle from '../../generals/mapa/mapa_google';

const DirectionsAlt = (props) => {
    return (  
        <>
        <section className="spy-nodo nodo-map">
        <section className="content-nodo">

       
        <section className="section-landing">
            <Title  {...props}
                    title="Horarios y dirección"
                    subtitle="Visitanos en nuestra tienda física, envianos un email o llamanos por teléfono."
                    position="center"
                    alt="true"
                    />
            <GWrapper>
                <GContainer {...props}>
                    <DirectionAltContainer {...props}>
                        <section className="item">
                            <i className="fas fa-map-marked-alt"></i>
                            <h1>Nuestra dirección</h1>
                            <p>Correos #357, Col.Evolución, Cd. Nezahualcoyotl, Estado de México</p>
                        </section>
                        <section className="item">
                            <i className="fas fa-phone"></i>
                            <h1>Llamanos</h1>
                            <p>55 7681 - 6666</p>
                        </section>
                        <section className="item">
                            <i className="fas fa-envelope-open-text"></i>
                            <h1>Envianos un e-mail</h1>
                            <p><a href="">scriptink.mx@gmail.com</a></p>
                        </section>
                        <section className="item">
                            <i className="far fa-calendar-alt"></i>
                            <h1>Nuestros horarios</h1>
                            <p>Lunes a viernes de 9am. a 7pm.<br/> Sábados de 10am. a 3pm.</p>
                        </section>
                        
                    </DirectionAltContainer>


                </GContainer>
            </GWrapper>
            <section className="map" style={{
                width:'100%',
                height:'450px'
            }}>
                <FullMapContainer className="map-inner">
                        <MapaGoogle id="g-mapa"/>
                </FullMapContainer>
            </section>
            

        </section>
        </section>
        </section>
        </>
    );
}
 
export default DirectionsAlt;