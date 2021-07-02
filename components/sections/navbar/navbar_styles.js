import styled from 'styled-components'

const colores = {
    colorBarra:'#D52A0D',
    colorBackButtons:'#BE240A',
    colorButtonsHover:'#D52A0D',
    colorFont:'white',
    colorFontHover:'white',
    white:"#ffffff"
}




export const NavWrapper = styled.nav.attrs(props =>({
        backColor: props.themeSettings.navbarSettings.backColor,
        heightMenu: props.themeSettings.navbarSettings.heightMenu,
        widthMenu: props.themeSettings.navbarSettings.widthMenu,
        paddingMenuDesktop: props.themeSettings.navbarSettings.paddingMenuDesktop,
        paddingMenuMobile: props.themeSettings.navbarSettings.paddingMenuMobile,
        textColor: props.themeSettings.navbarSettings.textColor,
        responsiveBackColor: props.themeSettings.navbarSettings.responsiveBackColor,
        responsiveBackColorHover: props.themeSettings.navbarSettings.responsiveBackColorHover,
}))`  
   
        position:fixed;
        width:100%;
        left:0px;
        z-index:900;
        display:flex;
        justify-content: center;
        /* -webkit-box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.31);
        -moz-box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.31);
        box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.31); */
        
        .logo-navbar{
            width:230px;
            height:50px;
            object-fit:contain;
            object-position: left center;
        }
        .nav-logo{
            display:flex;
            justify-content:center;
            align-items:center;
        }
        

        .nav-container{
            width:100%;
            max-width:${(props)=> props.widthMenu};
            height:${(props)=> props.heightMenu};
            font-size:18px;
            padding:${(props) => props.paddingMenuDesktop};
            display:flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width:${(props) => props.widthMenu}){
                padding:${(props) => props.paddingMenuMobile};
            }
        }
        .nav_buttons{
            display:flex;
            @media (min-width:800px){
                align-items:center;
            }
            a{
                text-decoration:none;
                color:${(props)=> props.textColor};
                padding:10px 20px;
                :hover{
                
                }
                @media (max-width:800px){
                    background:${(props) => props.responsiveBackColor};
                    color:${(props)=> props.textColor};
                    :hover{
                        background:${(props)=> props.responsiveBackColorHover};
                        color:${(props)=> props.textColor}; 
                    }
                }
            }
            @media (max-width:800px){
                position:absolute;
                top:99%;
                width:100%;
                left:0px;
                display:flex;
                flex-flow:column;
                overflow:hidden;
                max-height:0px;
                transition:all 0.5s;
                    
            }
        }  
/*---------------> CLASE DE TOGGLE */
        .open{
            max-height:100vh;
        }
        .toggle span{
            transform:rotate(360deg);
            background-color:transparent;
        }
        .toggle span::before{
            transform:translateY(0px) rotate(45deg);
        }
        .toggle span::after{
            transform:translateY(-3px) rotate(-45deg);
        } 

        button{
            display:none;
            
            @media (max-width:800px){
                display:block;
                outline:none;
                width:28px;
                height:30px;
                background:none;
                border:none;
                cursor:pointer;
            }
            span, span::before, span::after{
                display:block;
                content:'';
                background:${(props)=> props.textColor};
                height:3px;
                width:28px;
                border-radius: 4px;
                transition:all 0.5s;
            }
            span::before{
                transform: translateY(-8px);
            }
            span::after{
                transform: translateY(5px);
            }
            
        }

`;



