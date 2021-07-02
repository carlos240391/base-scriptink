import styled from 'styled-components';


export const SimpleCardStyles = styled.section.attrs(props =>({
        colors: props.themeSettings.producstSettings.colors
}))`
        
        width:100%;
        cursor:pointer;
        .s-card{
            width:100%;
            background:${(props)=> props.colors.light };
            border-radius:3px;
            overflow: hidden;
            -webkit-box-shadow: 0px 5px 10px 1px rgba(0,0,0,0.1); 
            box-shadow: 0px 5px 10px 1px rgba(0,0,0,0.1);
            position:relative;
            &:before{
                    content:'';
                    display:block;
                    width:100%;
                    height:100%;
                    position:absolute;
                    top:0px;
                    left:0px;
                    background:black;
                    opacity:0.7;
                    z-index:20;
                    transition:all 0.3s;
            }
            :hover:before{
                opacity:0;

            }
            .img-spiner{
                width:100%;
                height:180px;
                display:flex;
                justify-content: center;
                align-items:center;
                color:${(props)=> props.colors.primary};
            }
            &__img{
                background:hotpink;
                img{
                    width:100%;
                    height:250px;
                    object-fit: cover;
                    position:relative;
                }
                
            }
            &__txt{
                padding:10px;
                display:flex;
                flex-flow:column;
                justify-content: flex-start;
                align-items: center;
                h3{
                    font-size:2.6rem;
                    text-align:center;
                    width:100%;
                    overflow:hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                p{
                    font-size:1.6rem;
                    text-align:center;
                    color:${(props)=> props.colors.colorGray};
                }
                small{
                    font-weight:800;
                    font-size:1.6rem;
                    color:${(props)=> props.colors.primary};
                }
                button{
                    background:${(props)=> props.colors.primary};
                    color:${(props)=> props.colors.light};
                    padding:5px 20px;
                    margin:10px 0px;
                    border-radius:3px;
                }
            }
        }
`;