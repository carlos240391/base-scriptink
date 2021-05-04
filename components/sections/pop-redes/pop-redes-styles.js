import styled,{keyframes} from 'styled-components';


const enter = keyframes`
    0%{
        opacity:0;
        transform:translateY(-50%) translateX(200px);
    }
    100%{
        opacity:1;
        transform:translateY(-50%) translateX(0);
    }
`;
const out = keyframes`
    0%{
        opacity:1;
        transform:translateY(-50%) translateX(0);
    }
    100%{
        opacity:0;
        transform:translateY(-50%) translateX(200px);
    }
`;



export const ContainerPopRedes = styled.section.attrs(props =>({
        colorBack : props.themeSettings.popRedesSettings.colorBack,
        colorText : props.themeSettings.popRedesSettings.colorText,

}))`

        .pop-r{
            position:fixed;
            right:0px;
            top:50%;
            transform:translateY(-50%);
            z-index:1000;
            opacity:0;
            display:flex;
            flex-flow:column;
            a{
                background:${(props)=> props.colorBack};
                width:30px;
                height:30px;
                margin:3px 0px;
                display: flex;
                justify-content:center;
                align-items:center;
                border-radius:3px 0px 0px 3px;
                i{
                    font-size:1.5rem;
                    color:${(props)=> props.colorText};
                }
            }
        }
        .in-p{
            animation:${enter} 0.3s linear;
            animation-fill-mode:forwards;
        }
        .out-p{
            animation:${out} 0.3s linear;
            animation-fill-mode:forwards;
        }

`;