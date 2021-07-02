import FloatWhatsapp from '../sections/float_whatsapp/float_wathsapp'
import ProgressBar from '../sections/progress_bar/progress_bar'
import Anouncement from '../sections/anouncement/anouncement'
import Footer from '../sections/footer/footer'


const LayoutPage = (props) => {
    return ( 
        <>
            <FloatWhatsapp {...props}/>
            <ProgressBar {...props}/>
            <Anouncement {...props}/>
            <section>
                {props.children}
            </section>
            <Footer {...props}/>
        </>
     );
}
 
export default LayoutPage;