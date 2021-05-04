import LayoutGeneral from "../components/layout/layout-general"

const Privacy = (props) => {
    return ( 
        <>
        <LayoutGeneral {...props}>
        <div id="flag-scroll"></div>
            Aviso de privacidad
            <div style={{height:'2000px', background:'lightgreen'}}></div>
        </LayoutGeneral>
        </>
     );
}
 
export default Privacy;