import React from 'react';
import { ContainerPopRedes } from "./pop-redes-styles";

const PopRedes = (props) => {

    const {
        socialOptions,
        visible
    } = props.themeSettings.popRedesSettings
    const [number, setNumber]= React.useState(false);

    React.useEffect(()=>{
        const flagScroll = document.querySelector('#flag-scroll');
        const getTop = ()=>{
            const topFlagScroll = flagScroll.getBoundingClientRect().top;
            const yTop = window.scrollY;
            if(yTop > (topFlagScroll - 300)){
                setNumber(true);
            }else{
                setNumber(false);
            }
        }
        window.addEventListener('load', getTop);
        window.addEventListener('scroll', getTop);
        return () =>{
            window.removeEventListener('load', getTop);
            window.removeEventListener('scroll', getTop);
        }
    },[number])

    
    if(!visible) return null

    return (
        <>
            <ContainerPopRedes {...props}>
                <div className={
                    number 
                    ? 'pop-r in-p'
                    : 'pop-r out-p'
                }>
                    {
                        socialOptions.map((red,i)=>{
                            return(
                                <a  href={red.href}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    key={i}
                                    >
                                    <i className={red.icon}></i>
                                </a>
                            )
                        })
                    }
                    
                </div>
              
            </ContainerPopRedes>
        </>
      );
}
 
export default PopRedes;