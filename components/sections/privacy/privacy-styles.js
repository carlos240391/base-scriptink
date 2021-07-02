import styled from 'styled-components'


export const PrivacyContentStyles = styled.section.attrs(props=>({
    colorBody : props.themeSettings.aboutSettings.colorBody,
}))`
    width:100%;
    max-width:1000px;
    margin:auto;
    .logo-page{
        padding:30px 0px 30px 0px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-flow:row wrap;
        border-bottom:1px solid #ededed;
        @media (max-width:500px){
            flex-flow:column;
            section{
                padding:10px 0px;
                display: flex;
                flex-flow:column;
                align-items:center;
            }
        }
        
        
        img{
            width:100%;
            max-width:150px;
            display:block;
            cursor:pointer;
        }
        h3{
            color:#ccc;
            line-height:30px; 
            padding:0px;
        }
        p{
            font-size:1.6rem;
            text-align:right;
        }
    }
    .title-page{
        text-align:center;
        padding:30px 10px;
        h1{
            font-size:3.6rem;
            line-height:30px;   
        }
    }
    h3{
        font-size:2.3rem;
        padding:20px 0px;
        text-transform: uppercase;
    }
    p,ul,ol{
        font-weight:300;
        color:${(props)=> props.colorBody};
        line-height:30px;
        text-align:left;
    }
    ul,ol{
        list-style-position: inside;
        padding:10px 0px;
    }
    mark{
        padding:0px 10px;
        background-color:teal;
        color:white;
    }

`;