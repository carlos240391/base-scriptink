import styled from 'styled-components'



export const BGModal = styled.section`
    background:rgba(0,0,0,0.8);
    width:100%;
    height:100vh;
    position:fixed;
    top:0px;
    left:0px;
    display:${(props) => props.active ? 'block' : 'none'};
    z-index:5000;
`;


export const CTModal = styled.section`
    width:100%;
    max-width:600px;
    max-height:500px;
    position:fixed;
    left:50%;
    top:${(props) => props.active ? '50%' : '-200%'};
    transform:${(props)=> props.active ? 'translateY(-50%) translateX(-50%)' : 'translateY(0) translateX(-50%)'};
    transition:top 0.3s;
    border-radius:3px;
    z-index:5001;
    overflow: hidden;
   
    .close-modal{
        display:flex;
        position:absolute;
        justify-content: flex-end;
        top:5px;
        right:5px;
        button{
            width:30px;
            height:30px;
            background:tomato;
            color:white;
            border-radius:100%;
            display:flex;
            justify-content: center;
            align-items:center;
        }
        
    }
`;