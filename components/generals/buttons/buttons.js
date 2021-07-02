import styled from 'styled-components';


export const Anchor = styled.a`
    padding:5px 20px;
    background:${(props)=> props.backColor ? props.backColor : 'gray'};
    color:${(props)=>props.textColor ? props.textColor : 'white'};
    border-radius:6px;
    width:${(props)=> props.widthAnchor ? props.widthAnchor : 'auto'};
    position:relative;
    :before{
        content:'';
        display:block;
        width:100%;
        height:100%;
        position:absolute;
        left:0px;
        top:0px;
        background:black;
        opacity:0;
    }
    :hover:before{
        opacity:0.3;
        mix-blend-mode:overlay;
    }
`;