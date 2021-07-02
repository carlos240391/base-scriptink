import styled from 'styled-components';






export const AboutContainer = styled.section.attrs(props =>({
        colorBody : props.themeSettings.aboutSettings.colorBody,
        align : props.themeSettings.aboutSettings.align,
        
}))`
        p{
            max-width:1000px;
            margin:auto;
            font-weight:300;
            color:${(props)=> props.colorBody};
            line-height:30px;
            text-align:${(props)=> props.align};
            @media (max-width:500px){
                text-align:left;
            }
        }
`;



export const ServicesContainer = styled.section.attrs(props=>({
        colorBody : props.themeSettings.aboutSettings.colorBody,
        colorSubheading : props.themeSettings.aboutSettings.colorSubheading,
}))`
        display:grid;
        grid-template-columns:repeat(auto-fit, minmax(350px, 1fr));
        grid-gap:10px;
        @media (max-width:1105px){
            grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
        }
        @media (max-width:745px){
            grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
        }
        .services-card{
            background:white;
            border-radius:6px;
            padding:20px 20px 50px 20px;
            display:flex;
            flex-flow:column;
            align-items:center;
            @media (max-width:600px){
                align-items:center;
            }
            img{
                width:150px;
                height:150px;
            }
            small{
                color:${(props)=>props.colorSubheading};
            }
            h3{
                text-align:center;
                line-height:1.1;
                font-size:25px;
                margin-bottom:10px;
            }
            p{
                color:${(props)=>props.colorBody};
                font-weight:300;
                line-height:30px;
                font-size:1.6rem;
                text-align:center;
                @media (max-width:600px){
                    text-align:center;
                }
            }
            a{
                font-weight:100;
                opacity:1;
            }
            
            
        }
`;