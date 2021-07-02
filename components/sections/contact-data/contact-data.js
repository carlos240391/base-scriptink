import { SpacingAbout, GWrapper, GContainer } from "../../generals/wrapper/wrapper"
import { ContactDataContainer } from "./contact-data-styles"

const ContactData = (props) => {
    return (  
        <>
        <section className="spy-nodo" style={{background:'black',}}>
        <section className="content-nodo">
        <SpacingAbout>
        <GWrapper {...props}>
        <GContainer {...props}>
            <ContactDataContainer>
                <section className="left-contact">
                    <section className="left-contact__icon"><i className="fas fa-id-card-alt"></i></section>
                    <section className="left-contact__content">
                        <h1>Datos de contacto</h1>
                        <p>55 7700 9900</p>
                        <p>contacto@zentinela.com</p>
                    </section>
                </section>
                <section className="right-contact">
                    <section className="right-contact__icon"><i className="fas fa-clock"></i></section>
                    <section className="right-contact__content">
                        <h1>Horarios de atención</h1>
                        <p>55 7700 9900</p>
                        <p>contacto@zentinela.com</p>
                    </section>
                </section>
            </ContactDataContainer>
        </GContainer>
        </GWrapper>
        </SpacingAbout>
        </section>
        </section>

        </>
    );
}
 
export default ContactData;