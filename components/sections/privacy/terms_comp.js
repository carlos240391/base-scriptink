import { GContainer, GWrapper, SpacingAbout } from "../../generals/wrapper/wrapper";
import { PrivacyContentStyles } from "./privacy-styles";
import Link from 'next/link'
import {motion} from 'framer-motion'

const TermsComp = (props) => {


    return ( 
        <>
        <motion.div exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1, delay:1}}
                    >
        <GWrapper {...props}>
        <GContainer {...props}>
        <PrivacyContentStyles {...props}>
            <section className="logo-page">
                <Link href="/">
                    <img src={props.themeSettings.general.links.logo} alt="logo"/>
                </Link>
                <section>
                    <h3>Terminos y condiciones</h3>
                    <p>Actualizado 24-marzo-2021</p>
                </section>
            </section>
            <section className="title-page">
                <h1>TERMINOS Y CONDICIONES</h1>
            </section>

            <section>
                <h3>Titulo</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                </p>
                <h3>Titulo dos</h3>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it
                    over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia,
                    looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                    through the cites of the word in classical literature,
                    discovered the undoubtable source. Lorem Ipsum comes
                    from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                    et Malorum" (The Extremes of Good and Evil) by Cicero, written
                    in 45 BC. This book is a treatise on the theory of ethics, very
                    popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                    ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    <br/>
                    <br/>
                    The standard chunk of Lorem Ipsum used since the 1500s
                    is reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                    reproduced in their exact original form, accompanied by English
                    versions from the 1914 translation by H. Rackham.
                </p>
                <h3>Lista desordenada</h3>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s
                    is reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum"
                </p>
                <ul>
                    <li>Uno: Contrary to popular belief, Lorem Ipsum is not</li>
                    <li>Dos: Contrary to popular belief, Lorem Ipsum is not</li>
                    <li>Tres: Contrary to popular belief, Lorem Ipsum is not</li>
                    <li>Cuatro: Contrary to popular belief, Lorem Ipsum is not</li>
                </ul>
                <h3>Lista ordenada</h3>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s
                    is reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum"
                    The standard chunk of Lorem Ipsum used since the 1500s
                    is reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum"
                </p>
                <ol>
                    <li>Contrary to popular belief, Lorem Ipsum is not</li>
                    <li>Dos: Contrary to popular belief, Lorem Ipsum is not</li>
                    <li>Tres: Contrary to popular belief, Lorem Ipsum is not</li>
                    <li>Cuatro: Contrary to popular belief, Lorem Ipsum is not</li>
                </ol>
                
            </section>
        </PrivacyContentStyles>
        </GContainer>
        </GWrapper>
        </motion.div>
        <SpacingAbout></SpacingAbout>
        </>
     );
}
 
export default TermsComp;