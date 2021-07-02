import { BGModal, CTModal } from "./modal-styles";
import usePortal from 'react-useportal';
import React from 'react'

const Modal = (props) => {
    const { Portal } = usePortal()
    const {setActive} = props

    React.useEffect(()=>{
        if(props.active){
            document.getElementsByTagName("html")[0].style.overflow = "hidden"
        }else{
            document.getElementsByTagName("html")[0].style.overflow = "auto";
        }
    },[props.active])


    return(  
        <>
        <Portal> 
            <BGModal {...props} onClick={()=>{setActive(false)}}/>
            <CTModal {...props}>
                <section className="close-modal"><button onClick={()=>{setActive(false)}}><i className="fas fa-times"></i></button></section>
                {props.inner}
            </CTModal>
        </Portal>   
        </>
    )
}
 
export default Modal;