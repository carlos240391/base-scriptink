import styled from 'styled-components';


export const FaqsContainer = styled.section.attrs(props=>({
    colors : props.themeSettings.faqsSettings.colors
}))`
    width:100%;
    display:flex;
   
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
        display:flex;
        justify-content:center;
        align-items:flex-start;
        img{
            width:70%;
            height:355px;
            object-fit: contain;
            @media (max-width:500px){
                height:250px;
            }
        }
    }
    .faq-tab-click{
        cursor:pointer;
        background:white;
        padding:10px 10px;
        border-bottom:1px solid ${(props)=> props.colors.colorLightGray};
        display:flex;
        justify-content:space-between;
        align-items:center;
        .tab-click-title{
            color:${(props)=> props.colors.colorGray};
            font-weight:400;
        }
    }
    .faq-content{
        max-height:0px;
        overflow:hidden;
        &__inner{
            background:white;
            padding:20px 20px;
            color:gray;
            font-weight:300;
            font-size:1.6rem;
        }
    }
    .faq-tab-click-active{
        .tab-click-title,
        .tab-click-icon{
            color:${(props)=> props.colors.primary};
        }
        .tab-click-icon{
            transition:all 0.5s;
            transform:rotate(90deg);
        }
    }
    .faq-content-active{
        transition:all 1s;
        max-height:1000px;
    }


`;