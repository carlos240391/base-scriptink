import React from 'react';
import styled from 'styled-components'


const Indicator = styled.div`
        width:0%;
        height:6px;
        background:linear-gradient(to right, ${(props) => props.firstColor}, ${(props) => props.secondColor});
        position:fixed;
        top:0px;
        left:0px;
        z-index:5000;
        border-radius:0px 0px 3px 3px;
`;

const ProgressBar = (props) => {

    const {
        firstColor,
        secondColor
    }  = props.themeSettings.progressBarSettings

    const moveScroll = (e) =>{
        if(typeof window !== 'undefined'){

            const scrollIndicator = document.querySelector('#indicator');
            if(scrollIndicator){
                const maxHeight = window.document.body.scrollHeight - window.innerHeight;
                const percentage = ((window.scrollY)/maxHeight * 100);
                scrollIndicator.style.width = percentage + '%';
            }
        }
    }

    React.useEffect(()=>{
       
        moveScroll()
        
        window.addEventListener('scroll', moveScroll)
        return () => window.removeEventListener('scroll', moveScroll);
    },[])


    return (
        <>
            <Indicator  id="indicator"
                        firstColor={firstColor}
                        secondColor={secondColor}
                        />   
        </>
    );
};

export default ProgressBar;