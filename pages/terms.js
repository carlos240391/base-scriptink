import LayoutGeneral from "../components/layout/layout-general"

const Terms = (props) => {
    return ( 
        <>
        <LayoutGeneral {...props}>
        <div id="flag-scroll"></div>
            Terminos y condiciones
            <div style={{height:'2000px', background:'lightgreen'}}></div>
        </LayoutGeneral>
        </>
     );
}
 
export default Terms;