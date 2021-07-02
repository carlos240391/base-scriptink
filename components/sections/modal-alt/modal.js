import { BGModal, CTModal } from "./modal-styles";

import React from 'react'

const ModalAlt = (props) => {
  
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
            <BGModal {...props} onClick={()=>{setActive(false)}}/>
            <CTModal {...props}>
                <section className="close-modal"><button onClick={()=>{setActive(false)}}><i className="fas fa-times"></i></button></section>
                {props.inner}
            </CTModal>
        </>
    )
}
 
export default ModalAlt;