import React from 'react'
import Title from "../../generals/titles/title"
import { GContainer, GWrapper } from "../../generals/wrapper/wrapper"
import { AboutContainer, ServicesContainer } from "./about-styles";
import { SpacingAbout } from '../../generals/wrapper/wrapper'
import {motion} from 'framer-motion';
import { Anchor } from '../../generals/buttons/buttons';
import ServiceItem from './service-item';


const About = (props) => {

    const {
        aboutContent,
        align,
        services
    } = props.themeSettings.aboutSettings;

    

    return (  
        <>
        <section className="spy-nodo" id="about">
        <section className="content-nodo">
            <motion.div exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5, delay:2}}
                    id="about-id"
                    >
            <SpacingAbout style={{paddingTop:'50px'}}>
                <Title  {...props}
                        title="Acerca de nosotros"
                        position={align}
                        />

                <GWrapper>
                    <GContainer {...props}>
                        <AboutContainer {...props}>
                        <p>{aboutContent}</p>
                        </AboutContainer>
                    </GContainer>
                </GWrapper>
            </SpacingAbout>

            <SpacingAbout style={{paddingTop:'0px'}}>
            <Title  {...props}
                    title="Nuestros servicios"
                    subtitle="Nosotros cuidamos tu tranquilidad."
                    position={align}
                    alt="true"
                    />

            <GWrapper>
                <GContainer {...props}>
                <ServicesContainer {...props}>
                    {
                        services.map((service, i)=>{
                            return(
                                <ServiceItem    service={service}
                                                {...props}
                                                key={i}
                                                />
                            )
                        })
                    }
                </ServicesContainer>
                </GContainer>
            </GWrapper>
            </SpacingAbout>
            </motion.div>
            </section>
            </section>
        </>
    );
}
 
export default About;