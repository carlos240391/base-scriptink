import styled from 'styled-components';



export const WrapperTitle = styled.section`
            width:100%;
`;

export const ContentTitle = styled.section.attrs(props =>({
            wrapperSize : props.themeSettings.general.wrapperSize,
            paddingDesktop : props.themeSettings.general.paddingDesktop,
            paddingMobile : props.themeSettings.general.paddingMobile,
            align : props.themeSettings.general.align,
            colors : props.themeSettings.general.colors
}))`
            max-width:${(props)=> props.wrapperSize};
            margin:auto;
            padding:${(props)=>props.paddingDesktop};
            .title-caja{
                padding:20px 0px;
                h3, p{
                    text-align:${(props)=>props.position ? props.position : props.align};
                }
                h3{
                    font-size:4rem;
                    letter-spacing:0px;
                    position:relative;
                }
                p{
                    color:${(props)=> props.colors.primary};
                    font-weight:300;
                }
            }
            @media (max-width:${(props)=> props.wrapperSize}){
                padding:${(props)=>props.paddingMobile};
            }
`;