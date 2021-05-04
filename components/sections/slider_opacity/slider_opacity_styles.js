import styled,{keyframes} from 'styled-components'




const enter = keyframes`
    0%{
        z-index:0;
        transform:scale(1.1);
        opacity:0;  
    }
    100%{
        z-index:1;
        transform:scale(1);
        opacity:1;
    }
`;

const out = keyframes`
    0%{
        z-index:1;
        opacity:1;
    }
    100%{
        z-index:0;
        opacity:0;
    }
`;

const enterCard = keyframes`
    0%{
        transform:translateY(100px) ;
    }
    100%{
        transform:translateY(0px);
    }
`;



export const SliderCont = styled.section.attrs(props =>({
    heightSlider: props.themeSettings.sliderOpacitySettings.heightSlider,
    widthSlider: props.themeSettings.sliderOpacitySettings.widthSlider,
    colorDotsActive: props.themeSettings.sliderOpacitySettings.colorDotsActive,
    colorDots: props.themeSettings.sliderOpacitySettings.colorDots
}))`
        background:black;
        width:100%;
        max-width:${(props) => props.widthSlider};
        height:${(props)=> props.heightSlider};
        margin:auto;
        position:relative;
        .slider-caja{
            width:100%;
            height:100%;
            background:black;
            overflow:hidden;
            position:relative;
        }
        .enter{
            animation:1s ${enter} ease-in-out;
            animation-fill-mode:forwards;
        }
        .out{
            animation:1s ${out} ease-in-out;
            animation-fill-mode:forwards;
        }
        .controls{
            position:absolute;
            z-index:500;
            bottom:10px;
            left:50%;
            transform:translateX(-50%);
            display:flex;
        }

        input[type="radio"]{
            display:none;
        }
        input[type="radio"] + label{
            width:12px;
            height:12px;
            background:gray;
            display:block;
            margin:5px;
            cursor:pointer;
            border-radius:100%;
            overflow:hidden;
        }
        input[type="radio"] + label span{
            width:100%;
            height:100%;
            background:white;
            display:block;
        }
        input[type="radio"]:checked + label span{
            background:${(props)=> props.colorDotsActive};
        }
        
`;

export const SliderItem = styled.section.attrs(props =>({
    widthContent: props.themeSettings.sliderOpacitySettings.widthContent,
    colorTitles: props.themeSettings.sliderOpacitySettings.colorTitles,
    colorContent: props.themeSettings.sliderOpacitySettings.colorContent,
    colorSubheading: props.themeSettings.sliderOpacitySettings.colorSubheading

}))`
       
        width:100%;
        height:100%;
        background-image:url(${(props) => props.src});
        background-size:cover;
        background-position:center center;
        position:absolute;
        left:0px;
        top:0px;

        :before{
            display:block;
            content:'';
            width:100%;
            height:100%;
            background:rgba(0,0,0,0.5);
            mix-blend-mode:multiply;
        }
        .enter-card{
            animation:${enterCard} 1s;
        }
        .slider-item-content{
            position:absolute;
            top:0px;
            left:50%;
            transform:translateX(-50%);
            width:100%;
            max-width:${(props)=> props.widthContent};
            height:100%;
            display:flex;
            align-items:center;
            justify-content:${(props) => props.position};
            
            @media (max-width:${(props)=> props.widthContent}){
               padding:0px 20px;  
            }
            @media (max-width:800px){
                justify-content:center;
                padding:0px 10px;  
            }
            
            &__card{
                width:100%;
                max-width:${(props)=> props.cardWidth};
                min-height:${(props)=> props.cardHeight};
                border-radius:6px;
                background:rgba(${(props)=> props.cardColor },${(props)=> props.opacity});
                padding:20px 40px;
                h4{
                    letter-spacing:2px;
                    font-size:1.6rem;
                    color:${(props)=> props.colorSubheading};
                }
                h1{
                    color:${(props)=> props.colorTitles};
                }
                p{
                    font-weight:300;
                    line-height:30px;
                    color:${(props)=> props.colorContent};
                }
                .btn-content{
                    display:flex;
                    justify-content:flex-start;
                    margin-top:20px;
                }
                @media (max-width:800px){
                    padding:20px;
                }
            }
        }

`;