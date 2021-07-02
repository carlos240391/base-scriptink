import styled from 'styled-components';

export const Between = styled.section`
        display:flex;
        justify-content:space-between;
        section{
            max-width:calc(50% - 10px);
        }
        @media (max-width:500px){
            flex-flow:column;
            section{
                max-width:100%;
            }
        }
`;

export const FieldInput = styled.section`
        width:100%;
        padding:0px 0px 20px 0px;
        display:flex;
        flex-flow:column;
        label{
            color:white;
            font-weight:200;
        }
`;

export const TextArea = styled.textarea.attrs((props)=>({

}))`
        width:100%;
        border:1px solid white;
        background:none;
        height:100px;
        outline:none;
        resize:none;
        padding:20px;
        color:white;
        border-radius:6px;
`;

export const InputBase = styled.input.attrs((props)=>({

}))`
        width:100%;
        background:none;
        height:38px;
        padding:20px;
        outline:none;
        color:white;
        border:1px solid white;
        border-radius:6px;
        
`