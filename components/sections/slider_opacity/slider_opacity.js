import React from 'react';
import { SliderCont, SliderItem } from './slider_opacity_styles';
import {motion} from 'framer-motion';
import { Ancla } from '../../generals/buttons';


const SliderOpacity = (props) => {

    //const {items, controls} = props
    const [index, setIndex] = React.useState(0)

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

    if(!visibility) return null;
 

    return (
        <>
        <motion.div exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5, delay:1.5}}>
        <SliderCont {...props}>
            <section className="slider-caja">
            {sliders.map((item, i) =>(
                <SliderItem src={item.src}
                            key={i}
                            {...props}
                            position={item.positionCard}
                            opacity={item.opacity}
                            cardWidth={item.cardWidth}
                            cardHeight={item.cardHeight}
                            cardColor={item.cardColor}
                            className={
                                i === index 
                                ? 'enter'
                                : 'out'
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
        </motion.div>
        </>
    );
};

export default SliderOpacity;