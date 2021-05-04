import styled from 'styled-components';


export const FaqsContainer = styled.section`
    width:100%;
    display:flex;
    background:lightpink;
    padding:30px 0px 0px 0px;
    @media (max-width:800px){
        flex-flow:column;
    }
    .faqs-img,
    .faqs-tabs{
        width:50%;
        @media (max-width:800px){
            width:100%;
        }
    }
    .faqs-img{
        background:indianred;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:20px;
    }
    .faq-tab-click{
        cursor:pointer;
        background:white;
    }
    .faq-content{
        max-height:0px;
        overflow:hidden;
        transition:max-width 0.5s;
    }
    .faq-content-active{
        max-height:1000px;
    }


`;