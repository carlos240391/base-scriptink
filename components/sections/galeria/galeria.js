import React from 'react'
import Title from "../../generals/titles/title";
import { SpacingAbout } from "../../generals/wrapper/wrapper";
import Slider from "react-slick";
import { ContainerGalery } from './galeria-styles';
import SimpleCard from '../simple-card/simple-card';

const Galeria = (props) => {

    const {products, visibilty} = props.themeSettings.producstSettings;
   
    const refMultiSlide = React.useRef(null);
    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:10000,
        arrows:false,
        pauseOnHover:true,
        draggable:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    const clickNext = () =>{
        refMultiSlide.current.slickNext()
    }

    const clickPrev = () =>{
        refMultiSlide.current.slickPrev()
    } 
    if(!visibilty){
      return null;
    }

    return (  
        <>
            <section className="spy-nodo" id="multi-slide" data-flag="multi-carousel">
            <section className="content-nodo" id="galeria">
            <SpacingAbout className="section-landing">
                <Title  {...props}
                        title="Galería"
                        subtitle="Nosotros cuidamos tu tranquilidad."
                        position="center"
                        />
                <ContainerGalery {...props}>
                <Slider {...settings} ref={refMultiSlide}>
                    {products.map((product, i)=>{
                        return(
                            <div key={i}>
                                
                                <SimpleCard product={product} {...props} i={i}/>
                            </div>
                        )
                    })}
                </Slider>

                <button onClick={clickPrev} className="prev-multi"><i className="fas fa-chevron-left"></i></button>
                <button onClick={clickNext} className="next-multi"><i className="fas fa-chevron-right"></i></button>
                <section className="container-buttons-carousel">
                  <button onClick={clickPrev} className="prev-multi"><i className="fas fa-chevron-left"></i></button>
                  <button onClick={clickNext} className="next-multi"><i className="fas fa-chevron-right"></i></button>
                </section>
                </ContainerGalery>
            </SpacingAbout>
            </section>
            </section>
        </>
    );
}
 
export default Galeria;