import Title from "../../generals/titles/title"
import { ContainerForm } from "./form-styles"
import {FieldInput, InputBase, Between, TextArea} from '../../generals/inputs/inputs'
import { Anchor } from "../../generals/buttons/buttons"


const Form = (props) => {


    const {
        colors
    } = props.themeSettings.general

  

    return (  
        <>
        <section className="spy-nodo" id="contacto">
        <section className="content-nodo">


        
            <section ></section>
            <ContainerForm {...props} className="section-landing back-form" data-src={props.themeSettings.formSettings.backImage}>
                <section className="form">
                    <Title  {...props}
                            title="Contáctanos"
                            subtitle="Envianos un mensaje y nosotros te responderemos."
                            position="center"
                            />
                    

                    <section className="fields">
                        <Between>
                            <FieldInput>
                                <label>Nombre:</label>
                                <InputBase/>
                            </FieldInput>
                            <FieldInput>
                                <label>Apellido:</label>
                                <InputBase/>
                            </FieldInput>
                        </Between>
                        <Between>
                            <FieldInput>
                                <label>Email:</label>
                                <InputBase/>
                            </FieldInput>
                            <FieldInput>
                                <label>Número telefonico:</label>
                                <InputBase/>
                            </FieldInput>
                        </Between>
                        
                        <FieldInput>
                            <label>Mensaje:</label>
                            <TextArea/>
                        </FieldInput>

                        <FieldInput>
                            <Anchor     backColor={colors.primary}
                                        textColor={colors.light}
                                        widthAnchor="100%"
                                        style={{textAlign:"center"}}
                                        >Enviar mensaje</Anchor>
                        </FieldInput>
                       
                    </section>

                </section>
            </ContainerForm>
        </section>
        </section>
        </>
    );
}
 
export default Form;