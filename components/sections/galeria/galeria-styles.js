import styled from 'styled-components';



export const ContainerGalery = styled.section.attrs(props =>({
    container: props.themeSettings.producstSettings.container,
    colors: props.themeSettings.producstSettings.colors
}))`
        width:100%;
        max-width:${(props)=> props.container};
        margin:auto;
        position:relative;
        .prev-multi,
        .next-multi{
            width:50px;
            height:50px;
            background:${(props)=> props.colors.light};
            color:${(props)=> props.colors.primary};
            position:absolute;
            top:50%;
            transform:translateY(-50%);
            border-radius:100%;
            display: flex;
            justify-content:center;
            align-items:center;
        }

        .prev-multi{
            left:-50px;
        }
        .next-multi{
            right:-50px;
        }
        @media (max-width:1250px){
            .prev-multi{
                left:0px;
            }
            .next-multi{
                right:0px;
            }
        }
        .container-buttons-carousel{
            display:none;
        }
        @media (max-width:800px){
           
            .prev-multi,
            .next-multi{
                display:none;
            }
            .container-buttons-carousel{
                display:flex;
                justify-content: center;

                button{
                    display:flex;
                    position:relative;
                    top:0px;
                    transform:translateY(0px);
                    margin:0px 10px;
                }
            }
        }
`;