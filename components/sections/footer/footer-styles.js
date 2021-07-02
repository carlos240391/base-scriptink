import styled from 'styled-components';




export const FooterContainer = styled.footer.attrs(props =>({
        backColorFooter: props.themeSettings.footerSettings.backColorFooter,
        widthFooter: props.themeSettings.footerSettings.widthFooter,
        paddingDesktop: props.themeSettings.footerSettings.paddingDesktop,
        paddingMobile: props.themeSettings.footerSettings.paddingMobile,
        primaryColor: props.themeSettings.footerSettings.primaryColor,
        secondaryColor: props.themeSettings.footerSettings.secondaryColor,
}))`
        width:100%;
        background:${(props)=> props.backColorFooter};
        .fab{
            line-height:inherit!important;
        }
        .footer__caja{
            width:100%;
            max-width:${(props)=> props.widthFooter};
            margin:auto;
            padding:${(props)=> props.paddingDesktop};
            display:flex;
            flex-flow:column;
            @media (max-width:${(props)=> props.widthFooter}){
                padding:${(props)=> props.paddingMobile};
            }

            &__top{
                display:grid;
                grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
                padding:20px 0px;
                border-bottom:1px solid rgba(255,255,255,0.1);
                grid-gap:20px 0px;
                &-logo{
                    display:flex;
                    img{
                        width:150px;
                        height:100px;
                        object-fit: contain;
                        display:flex;
                    }
                }
                &-firm{
                    color:white;
                    font-size:16px;
                    i{
                        margin:0px 10px;
                    }
                    @media (max-width:600px){
                        text-align:center;
                    }
                }
                &-redes{
                    display:flex;
                    flex-flow:column;
                    align-items:flex-start;
                    @media (max-width:600px){
                        align-items:center!important;
                    }
                    p{
                        font-weight:700;
                        font-size:18px!important;
                    }
                    p,a{
                        color:white;
                        font-size:16px;
                    }
                }
                .envolve-link-redes{
                    display:flex;
                    align-items:center;
                    
                    i{
                        margin-right:10px;
                        background:white;
                        border-radius:3px;
                        width:20px;
                        height:20px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        font-size:14px;
                    }
                }
                &-links{
                    display:flex;
                    flex-flow:column;
                    @media (max-width:600px){
                        align-items:center!important;
                    }
                    p,a{
                        color:white;
                        font-size:16px;
                    }
                }
                &-redes{
                    display:flex;
               
                    align-items:flex-start;
                    &-links{
                        display:flex;
                        &-link{
                            background:${(props)=> props.primaryColor};
                            width:35px;
                            height:35px;
                            margin-left:10px;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            border-radius:100%;
                            i{
                                color:${(props)=> props.secondaryColor};
                            }
                        }
                    }
                }
                @media (max-width:620px){
                    &-logo, &-redes{
                        justify-content:center;
                        padding:10px 0px;
                    }
                }
                @media (max-width:400px){
                    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
                }
            }
            &__bottom{
                padding:20px 0px 50px;
                display:grid;
                grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
                grid-gap:10px;
                .footer-item{
                    display:flex;
                    a, p{
                        color:${(props)=> props.secondaryColor};
                        font-size:1.6rem;
                    }
                    @media (max-width:545px){
                        justify-content:center;
                    }
                }
                .list-links{
                    display:flex;
                    flex-flow:column;
                    @media (max-width:545px){
                        align-items:center;
                    }
                    a{
                        font-size:1.5rem;
                        padding:0px 10px;
                        font-weight:300;
                    }
                }
            }
        }
`;