import styled,{keyframes} from 'styled-components';


const enter = keyframes`
    0%{
        opacity:0;
        transform:translateY(-20px);
    }
    100%{
        opacity:1;
        transform:translateY(0px);
    }
`;


export const AnouncementWrapper = styled.section.attrs(props =>({
       backColor : props.anouncementSettings.backColor
}))`
    background:${(props)=> props.backColor};

`;

export const AnouncementContainer = styled.section.attrs(props =>({
    widthAnouncement : props.anouncementSettings.widthAnouncement,
    heightAnouncement : props.anouncementSettings.heightAnouncement,
    paddingMobile : props.anouncementSettings.paddingMobile,
    colorText : props.anouncementSettings.colorText,
    position : props.anouncementSettings.position,
    fontSizeText : props.anouncementSettings.fontSizeText,
    backColorClose : props.anouncementSettings.backColorClose,
    textColorClose : props.anouncementSettings.textColorClose,
    
}))`
    width:100%;
    max-width:${(props) => props.widthAnouncement};
    min-height:${(props) => props.heightAnouncement};
    color:${(props) => props.colorText};
    display:flex;
    align-items:center;
    margin:auto;
    position:relative;
    padding:${(props) => props.paddingDesktop};
    .c-content{
        width:100%;
        text-align:${(props) => props.position};
        animation:${enter} 0.5s;
    }
    p, a{
        font-size:${(props) => props.fontSizeText};
    }

    a{
        text-decoration:underline;
    }
    #close-anouncement{
        width:20px;
        height:20px;
        background:${(props) => props.backColorClose};
        color:${(props) => props.textColorClose};
        font-size:1.5rem;
        border-radius:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        position:absolute;
        right:20px;
        top:50%;
        transform:translateY(-50%);
        @media (max-width:${(props)=> props.widthAnouncement}){
            right:10px;
        }
    }
    @media (max-width:${(props) => props.widthAnouncement}){
        padding:${(props) => props.paddingMobile};
    }
`;





