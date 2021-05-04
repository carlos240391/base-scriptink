import styled from 'styled-components';


export const SpacingAbout = styled.section`
        padding:0px 0px 50px 0px;
`;

export const GWrapper = styled.article`
        width:100%;
`;

export const GContainer = styled.section.attrs(props=>({
        wrapperSize : props.themeSettings.general.wrapperSize,
        paddingMobile : props.themeSettings.general.paddingMobile,
        paddingDesktop : props.themeSettings.general.paddingDesktop,
}))`
        width:100%;
        max-width:${(props)=> props.wrapperSize};
        margin:auto;
        padding:${(props)=> props.paddingDesktop};
        @media (max-width:${(props)=> props.wrapperSize}){
            padding:${(props)=> props.paddingMobile};
        }
`;  