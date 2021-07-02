import styled from 'styled-components';



export const ContainerCookies = styled.section`
           
            .cookies-box{
                width: 100%;
                background:${(props)=> `${props.themeSettings.general.colors.primaryDark}F2`};
                position:fixed;
                z-index:1000;
                bottom:-100%;
                display:flex;
                padding:10px 0px;
                transition:all 1s;
                &__display{
                    width:100%;
                    max-width:${(props)=> props.themeSettings.general.wrapperSize};
                    margin:auto;
                    display:flex;
                    
                    &-containerText{
                        width:calc(50%-350px);
                        color:white;
                        h1{
                            font-size:1.8rem;
                        }
                        p,a{
                            font-size:1.6rem;

                        }
                        a{
                            text-decoration: underline;
                        }
                    }
                    &-containerBtn{
                        width:350px;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        padding:10px;
                        button{
                            width:150px;
                            height:38px;
                            background:${(props)=> props.themeSettings.general.colors.primary};
                            color:white;
                            border-radius:6px;
                        }
                    }
                    @media (max-width:${(props)=> props.themeSettings.general.wrapperSize}){
                        padding:${(props)=> props.themeSettings.general.paddingMobile};
                    }
                    @media (max-width:500px){
                    flex-flow:column;
                    &-containerText,
                    &-containerBtn{
                        width:100%;
                        text-align:center;
                    }
                }
                }
                
            }
            .cookies-box__active{
                bottom:0px;
                transition:all 1s;
            }
            
`;