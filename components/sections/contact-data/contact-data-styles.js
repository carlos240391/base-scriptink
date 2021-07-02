import styled from 'styled-components';




export const ContactDataContainer = styled.section`
        padding-top:50px;
        display:flex;
        @media (max-width:800px){
            flex-flow:column;
        }
        .left-contact{
        }
        .right-contact{
        }
        .left-contact,
        .right-contact{
            width:50%;
            padding:10px 50px;
            display:flex;
            position:relative;
            &:before{
                content:'';
                display:block;
                width:4px;
                height:100%;
                position:absolute;
                top:0px;
                left:0px;
                background:white;

            }
            &__icon{
                width:80px;
                height:80px;
                display:flex;
                justify-content: center;
                align-items:center;
                i{
                    font-size:5rem;
                    color:white;
                }
            }
            &__content{
                width:calc(100% - 80px);
                padding:0px 30px;
                h1{
                    color:red;
                }
                p{
                    color:white;
                }
            }

            @media (max-width:800px){
                width:100%;
            }
            @media (max-width:500px){
                padding:10px 20px;
            }
        }
`;