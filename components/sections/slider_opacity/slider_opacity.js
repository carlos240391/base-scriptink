import React from 'react';
import { SliderCont, SliderItem } from './slider_opacity_styles';
import {motion} from 'framer-motion';
import { Ancla } from '../../generals/buttons';


const SliderOpacity = (props) => {

    //const {items, controls} = props
    const [index, setIndex] = React.useState(0)
    const [show, setShow] = React.useState(true)

    const {
        sliders,
        controls,
        time,
        visibility,
        colorTitles
    } = props.themeSettings.sliderOpacitySettings

    React.useEffect(()=>{
        const tick = setInterval(()=>{
            if(index < sliders.length - 1){
                setIndex( index + 1)
            }else{
                setIndex(0)
            }
        },time)
        return ()=> clearInterval(tick)
    },[index])

    React.useEffect(()=>{
        // if(visibility){
        //     setTimeout(()=>{
        //         setShow(true)
        //     },1500)
        // }
    },[])
    const moveSlideParallax = React.useCallback(()=>{
        const getSlider = document.querySelectorAll('.slider-item-content__card');
        const getControls = document.querySelectorAll('.controls');
        const getItemsSlide = document.querySelectorAll('.slider-caja');

        
        getControls.forEach((controls)=>{
            controls.style.transform = `translateY(${-window.scrollY / 18}px) translateX(-50%)`
        })
        getSlider.forEach((slider)=>{
            //slider.style.transform = `translateY(${window.scrollY / 10}px)`
        })
    },[])

    React.useEffect(()=>{
        window.addEventListener('scroll', moveSlideParallax);
        return ()=> window.removeEventListener('scroll', moveSlideParallax);
    },[moveSlideParallax])
  

    if(!visibility) return null;
 

    return (
        <>
        <motion.div exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5, delay:1.5}}>
        {show ? 
        <SliderCont {...props} style={{overflow:'hidden'}}>
            <section className="slider-caja" id="s-slider">
            {sliders.map((item, i) =>(
                <SliderItem src=""
                            key={i}
                            {...props}
                            colorTitle={item.colorTitle}
                            backOpacity={item.backOpacity}
                            textAlign={item.textAlign}
                            btnAlign={item.btnAlign}
                            position={item.positionCard}
                            opacity={item.opacity}
                            cardWidth={item.cardWidth}
                            cardHeight={item.cardHeight}
                            cardColor={item.cardColor}
                            data-src={item.src}
                            colorTextButton={item.colorTextButton}
                            className={
                                i === index 
                                ? 'enter nodo-slide all-items-slide'
                                : 'out nodo-slide all-items-slide'
                            }
                            
                            >
                    {item.visibilityCard &&
                    <section    className="slider-item-content">
                       <section className={
                                            i === index
                                            ? "slider-item-content__card enter-card"
                                            : "slider-item-content__card"
                                            }>
                            <h4>{item.subheading}</h4>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                            {item.textButton === ''
                                ? null
                                : 
                                <div    className="btn-content">
                                    <Ancla  href={item.buttonURL}
                                            backColor={colorTitles}
                                            >{item.textButton}</Ancla>
                                </div>
                            }
                       </section>
                    </section>
                    }
                </SliderItem>
            ))}
            </section>

            {controls &&(
                <section className="controls"> 
                {
                    sliders.map((item, i) =>{
                        return (
                            <section key={i}>
                                <input   type="radio"
                                        name="controls"
                                        id={`check${i}`}
                                        value={i}
                                        checked={i === index}
                                        onChange={()=> setIndex(i)}/>
                                <label htmlFor={`check${i}`}><span></span></label>
                            </section>
                        )
                        
                    })
                }
                </section>
            )}
        </SliderCont>
        : null
        }
        </motion.div>
        </>
    );
};

export default SliderOpacity;