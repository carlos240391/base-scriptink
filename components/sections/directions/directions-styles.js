import styled from 'styled-components';


export const DirectionsContainer = styled.section.attrs((props)=>({
        heightSection : props.themeSettings.directionsSettings.heightSection
}))`
        width:100%;
        display:flex;
        min-height:${(props)=> props.heightSection};
        padding-top:50px;
        .directions-left,
        .directions-right{
            width:50%;
        }
  
        .directions-left{
            display:flex;
            justify-content:flex-end;
            .cont{
                display:flex;
                justify-content:center;
                align-items:center;
            }
        }
        .directions-right{
            border-radius:6px 0px 0px 6px;
            overflow:hidden;
        }
        @media (max-width:800px){
            flex-flow:column;
            padding-top:20px;
            .directions-left,
            .directions-right{
                width:100%;
            }
            .directions-right{
                height:${(props)=> props.heightSection};
                border-radius:0px;
            }
        }
`;



export const CardDirections = styled.section.attrs((props)=>({
        colors : props.themeSettings.directionsSettings.colors
}))`
        width:100%;
        max-width:400px;
        min-height:100px;
        background:white;
        border-radius:6px;
        -webkit-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.11);
        -moz-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.11);
        box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.11);
        padding:20px;
        position:relative;

        @media (max-width:800px){
            max-width:100%;
        }

        i{
            position:absolute;
            width:50px;
            height:50px;
            right:-25px;
            top:-25px;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:3rem;
            border-radius:100%;
            background:${(props)=> props.colors.primary};
            color:${(props)=> props.colors.light};
            @media (max-width:800px){
                display:none;
            }
        }
        h3{
            font-size:2.2rem;
        }
        p{
            font-size:1.6rem;
            line-height:20px;
            padding:0px 20px;
            font-weight:300;
            color:${(props)=> props.colors.colorGray};
            position:relative;
            :before{
                content:'';
                display:block;
                width:5px;
                height:5px;
                background:${(props)=> props.colors.colorGray};
                position:absolute;
                left:5px;
                top:7px;
            }
        }
`;

export const DirectionAltContainer = styled.section.attrs((props)=>({
        colors : props.themeSettings.directionsSettings.colors
}))`
        width:100%;
        display:grid;
        grid-template-columns:repeat(auto-fit, minmax(250px,1fr));
        grid-gap:10px;
        padding-bottom:30px;
        @media (max-width:1050px){
            grid-template-columns:repeat(auto-fit, minmax(200px,1fr));
        }
        @media (max-width:850px){
            grid-template-columns:repeat(auto-fit, minmax(180px,1fr));
        }
        .item{
            
            text-align:center;
            padding:20px 0px;
            i{
                font-size:5rem;
                padding-bottom:20px;
            }
            h1{
                text-transform:uppercase;
                font-size:2.3rem;
            }
            p,a{
                font-size:1.6rem;
                line-height:20px;
                color:${(props)=> props.colors.colorGray};
                font-weight:200;
            }
        }
`;



export const FullMapContainer = styled.section`
        width:100%;
        height:100%;
        display:none;
`;