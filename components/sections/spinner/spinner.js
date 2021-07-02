import HashLoader from "react-spinners/HashLoader";

const Spiner = (props) => {


    return ( 
        <section style={{
            width:'100%',
            height:'100vh',
            background:'white',
            position:'fixed',
            top:'0px',
            left:'0px',
            zIndex:'9000',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }} id="load">
            <HashLoader color={props.themeSettings.general.colors.primary} size={100}/>
        </section>
     );
}
 
export default Spiner;