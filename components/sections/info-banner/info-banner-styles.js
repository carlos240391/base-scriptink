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
                    font-size:25px;
                    padding:0px 30px;
                    max-width:500px;
                    line-height:1.5;
                    position:relative;
                    :before{
                        content:'';
                        display:block;
                        width:8px;
                        height:100%;
                        position:absolute;
                        top:0px;
                        left:0px;
                        background:white;  
                    }
                }
                &-anchor{
                    display:flex;
                    padding:40px 30px 0px 30px;
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