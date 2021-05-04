import styled from 'styled-components';





export const Ancla = styled.a`
        padding:5px 40px;
        background:${(props)=> props.backColor ? props.backColor : 'pink'};
        color:white;
        font-weight:300;
        border-radius:6px;
        position:relative;
        overflow:hidden;
        :before{
            content:'';
            display:block;
            width:100%;
            height:100%;
            background:black;
            position:absolute;
            left:0px;
            top:0px;
            opacity:0;
        }
        :hover:before{
            opacity:0.3;
            mix-blend-mode:overlay;
        }
`;