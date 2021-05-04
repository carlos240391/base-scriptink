import styled from 'styled-components';



export const InfoBannerContainer = styled.section.attrs(props=>({
        backColorInfo: props.themeSettings.infoBannerSettings.backColorInfo,
        textColorInfo : props.themeSettings.infoBannerSettings.textColorInfo,
        heightSection : props.themeSettings.infoBannerSettings.heightSection
}))`
        width:100%;
        display:flex;
        height:${(props)=> props.heightSection};
        @media (max-width:800px){
            flex-flow:column-reverse;
            height:auto;
           
        }
        .info-content,
        .info-img{
            width:50%;
            @media (max-width:800px){
                width:100%;
            }
        } 
        .info-content{
            background:${(props)=> props.backColorInfo};
            padding:20px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:${(props)=> props.textColorInfo};
            &__body{
                p{
                    font-weight:300;
                    font-size:1.6rem;
                }
                &-anchor{
                    display:flex;
                    padding:20px 0px;
                }
            }
            @media (max-width:800px){
                padding:50px 20px;
            }
        }
        .info-img{
            
            img{
                width:100%;
                height:${(props)=> props.heightSection};
                object-fit:cover;
                display:block;
            }
        }
`;