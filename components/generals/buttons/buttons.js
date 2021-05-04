import styled from 'styled-components';


export const Anchor = styled.a`
    padding:5px 20px;
    background:${(props)=> props.backColor ? props.backColor : 'gray'};
    color:${(props)=>props.textColor ? props.textColor : 'white'};
    border-radius:6px;
    
`;