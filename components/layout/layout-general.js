import Anouncement from "../sections/anouncement/anouncement";
import FloatWhatsapp from "../sections/float_whatsapp/float_wathsapp";
import Footer from "../sections/footer/footer";
import NavBar from "../sections/navbar/navbar";
import PopRedes from "../sections/pop-redes/pop-redes";
import ProgressBar from "../sections/progress_bar/progress_bar";

const LayoutGeneral = (props) => {
    return (  

        <>
        <FloatWhatsapp {...props}/>
        <ProgressBar {...props} />
        <Anouncement {...props}/>
        <NavBar {...props}/>
        <PopRedes {...props}/>
        <section>
            {props.children}
        </section>
        <Footer {...props}/>
        </>
        
    );
}
 
export default LayoutGeneral;