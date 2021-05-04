import React from 'react';
import styled from 'styled-components'


export const FloatWhats = styled.a`
        width:55px;
        height:55px;
        background:green;
        border-radius:100%;
        position:fixed;
        bottom:30px;
        right:30px; 
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        -webkit-box-shadow: 1px 1px 16px -2px rgba(0,0,0,0.47);
        -moz-box-shadow: 1px 1px 16px -2px rgba(0,0,0,0.47);
        box-shadow: 1px 1px 16px -2px rgba(0,0,0,0.47);
        z-index:500;
`;

const FloatWhatsapp = (props) => {
    
    const {
        visibility,
        numberWhats,
        messageWhats
    } =  props.themeSettings.whatsappButtonSettings;

    if(!visibility) return null;

    return (
        <FloatWhats  
                    href={`https://api.whatsapp.com/send?phone=${numberWhats}&text=${messageWhats}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <svg id="button" xmlns="http://www.w3.org/2000/svg" width="26.879" height="26.879" viewBox="0 0 16.879 16.879">
                        <path id="whatsapp" d="M8.44,0A8.472,8.472,0,0,0,0,8.439a8.383,8.383,0,0,0,1.195,4.322L0,16.879l4.117-1.195A8.383,8.383,0,0,0,8.44,16.879,8.44,8.44,0,1,0,8.44,0Zm5.277,12.005-.393.393c-.556.556-1.833.512-2.654.353A9.646,9.646,0,0,1,4.143,6.468a3.466,3.466,0,0,1,.3-2.913l.393-.393a.556.556,0,0,1,.785,0L7.195,4.733a.556.556,0,0,1,0,.785L6.8,5.911a1.113,1.113,0,0,0,0,1.571L9.4,10.042a1.11,1.11,0,0,0,1.571,0l.393-.393a.58.58,0,0,1,.786,0l1.57,1.57a.555.555,0,0,1,0,.786Zm0,0" transform="translate(0 0)" fill="#fff"/>
                        </svg>

        </FloatWhats>
    );
};

export default FloatWhatsapp;