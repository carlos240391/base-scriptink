import Title from "../../generals/titles/title"
import { GContainer, GWrapper } from "../../generals/wrapper/wrapper"
import { AboutContainer, ServicesContainer } from "./about-styles";
import { SpacingAbout } from '../../generals/wrapper/wrapper'
import {motion} from 'framer-motion';


const About = (props) => {

    const {
        aboutContent,
        align,
        services
    } = props.themeSettings.aboutSettings;

    return (  
        <>
             <motion.div exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5, delay:2}}
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

            <SpacingAbout>
            <Title  {...props}
                    title="Nuestros servicios"
                    subtitle="Estamos dedicados a servirte los 365 dias del año."
                    position={align}
                    />

            <GWrapper>
                <GContainer {...props}>
                <ServicesContainer {...props}>
                    {
                        services.map((service, i)=>{
                            return(
                                <section    key={i}
                                            className="services-card"
                                            >
                                    <img src={service.icon} alt={service.icon}/>
                                    <br/>
                                    <small>{service.subheading}</small>
                                    <h3>{service.title}</h3>
                                    <p>{service.content}</p>
                                </section>
                            )
                        })
                    }
                </ServicesContainer>
                </GContainer>
            </GWrapper>
            </SpacingAbout>
            </motion.div>
        </>
    );
}
 
export default About;