import styled from 'styled-components';



export const ContainerForm = styled.section.attrs((props)=>({
        widthContainer : props.themeSettings.formSettings.widthContainer,
        heightContainer : props.themeSettings.formSettings.heightContainer,
        backImage : props.themeSettings.formSettings.backImage
}))`
        width: 100%;
        background:#000;
        height:${(props)=> props.heightContainer};
        background-position:center center;
        background-size:cover;  
        position:relative;
        @media (max-width:500px){
            height:calc(${(props)=> props.heightContainer} + 200px);
            
        }
        :before{
            content:'';
            display:block;
            position:absolute;
            width:100%;
            height:100%;
            background:rgba(0,0,0,0.9);
            left:0px;
            top:0px;
            mix-blend-mode:multiply;
            z-index:0;
        }
        .form{
            position:absolute;
            width:1100px;
            z-index:2;
            left:50%;
            top:50%;
            transform:translateY(-50%) translateX(-50%);
            color:white;
            width:100%;
            height:calc(100% - 100px);
            max-width:${(props)=> props.widthContainer};
         
        }
        .fields{
            width:100%;
            max-width:500px;
            margin:auto;
            @media (max-width:500px){
                padding:0px 10px;
            }
        }
`;