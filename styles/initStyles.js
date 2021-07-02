import {createGlobalStyle, keyframes} from 'styled-components';

const enter = keyframes`
    0%{
        opacity:0;
        transform:translateY(50px);
    }
    100%{
        opacity:1;
        transform:translateY(0px);
    }


`;
const enterMenu = keyframes`
    0%{
        opacity:0;
        transform:translateY(50px);
    }
    100%{
        opacity:1;
        transform:translateY(0px);
    }
`;



export const InitStyles = createGlobalStyle`

    *{
        padding:0px;
        margin:0px;
        box-sizing:border-box;
        font-family:${(props)=> props.themeSettings.general.baseFont};
    }
    html{
        font-size:62.5%;
    }
    body{
        font-size:${(props)=> props.themeSettings.general.sizeFontBody};
    }
    a, button{
        text-decoration:none;
        padding:0px;
        margin:0px;
        cursor: pointer;
        border:none;
        background:none;
        outline:none;
        font-size:${(props)=> props.themeSettings.general.sizeFontButtons};
        font-weight:${(props)=> props.themeSettings.general.regularWeight};
        color:inherit;
    }
    
    h1, h3,p{
        letter-spacing:0.05rem;
    }

    h1, h3{
        font-weight:${(props)=> props.themeSettings.general.boldWeight};
        font-size:${(props)=> props.themeSettings.general.sizeH1};
        letter-spacing:0.05rem;
    }
    p{
        font-weight:${(props)=> props.themeSettings.general.regularWeight};  
    }
    small{
        font-weight:${(props)=> props.themeSettings.general.lightWeight};
    }
    .section-landing{
        opacity:0;
    }
    /* .spy-nodo{
        min-height:400px;
    }
    .spy-nodo-true{
        min-height:0px;
    }
    .content-nodo{
        display:none;
    }
    .content-nodo-true{
        display: block;
        animation: ${enter} 1s ease-in-out;
    } */

    .active-link{
        text-decoration: underline!important;
    }
    .active-navbar{
        -webkit-box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.31);
        -moz-box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.31);
        box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.31);
        animation: ${enterMenu};
        transition:0.3s;
    }
`;