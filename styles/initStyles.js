import {createGlobalStyle} from 'styled-components';





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

   
`;