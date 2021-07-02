import React from 'react';
import { AnouncementContainer, AnouncementWrapper } from "./anouncement-styles";
import {motion} from 'framer-motion';


const Anouncement = (props) => {
    
    const {anouncementSettings} = props.themeSettings

    
    const [indice, setIndice] = React.useState(0);
    const [close, setClose] = React.useState(true);

    React.useEffect(()=>{
        const tick = setInterval(()=>{
            if(indice < anouncementSettings.anouncements.length - 1){
                setIndice(indice + 1);
            }else{
                setIndice(0);
            }
        },anouncementSettings.time);

        return ()=> clearInterval(tick);
    },[indice])

    React.useEffect(()=>{
        const allContents = document.querySelectorAll('.js-content');
        allContents.forEach((content)=>{ content.innerHTML = content.dataset.content; })
    },[indice])

    const closeAdd = () =>{
        setClose(false)
    }

    if(!anouncementSettings.visible) return null;
    
    return ( 
        <>
        {
            close &&
            <motion.div exit={{opacity:0}}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.5, delay:0.5}}
                        >
            <AnouncementWrapper anouncementSettings={anouncementSettings} id="js-anuncio">
                <AnouncementContainer anouncementSettings={anouncementSettings} id="js-parent">

                    {anouncementSettings.anouncements.map((anouncement, i)=>{
                        if(indice === i){
                            return(
                                <div    className="js-content c-content"
                                        data-content={anouncement.content}
                                        key={i}
                                        ></div>
                            )
                        }
                    })}
                    <button id="close-anouncement"
                            onClick={closeAdd}
                            >X</button>
                </AnouncementContainer>
            </AnouncementWrapper>
            </motion.div>

         }
        </>
    );
}
 
export default Anouncement;