import React, { useCallback } from 'react'
import LayoutGeneral from "../components/layout/layout-general"
import About from "../components/sections/about/about"
import Anouncement from '../components/sections/anouncement/anouncement'
import ContactData from '../components/sections/contact-data/contact-data'
import Directions from "../components/sections/directions/directions"
import DirectionsAlt from "../components/sections/directions/directions-alt"
import Faqs from "../components/sections/faqs/faqs"
import Footer from '../components/sections/footer/footer'
import Form from "../components/sections/form/form"
import Galeria from '../components/sections/galeria/galeria'
import InfoBanner from "../components/sections/info-banner/info-banner"
import MultiCarousel from '../components/sections/multi-carousel/multi-carousel'
import NavBar from '../components/sections/navbar/navbar'
import ProgressBar from '../components/sections/progress_bar/progress_bar'
import SliderOpacity from "../components/sections/slider_opacity/slider_opacity"

const Index = (props) => {

  const enterScroll = React.useCallback(()=>{
      const allNodes = document.querySelectorAll('.section-landing');

      allNodes.forEach((nodo)=>{
        const windowSplit = (window.innerHeight/20)*18;
        const topNodo = nodo.getBoundingClientRect().top;
        if(windowSplit > topNodo){
            nodo.style.opacity = '1';
            nodo.style.transition = 'all 1s';
        }
      })

  },[])
  const startSlides = React.useCallback(()=>{

      const allSlides = document.querySelectorAll('.nodo-slide');
      allSlides.forEach((slide)=>{
          setTimeout(() => {
            const route = slide.dataset.src;
            slide.style.backgroundImage = "url(" + route + ")";
          }, 2500);
      })
    
  },[])

  React.useEffect(()=>{ startSlides();},[startSlides])

  React.useEffect(()=>{
    enterScroll();
    window.addEventListener('scroll', enterScroll);
    return ()=> window.removeEventListener('scroll', enterScroll);
  },[enterScroll])

  React.useEffect(()=>{
      const allNodes = document.querySelectorAll('.spy-nodo');
      const callback = (entries, observer) =>{
          entries.forEach((entrie)=>{
            if(entrie.isIntersecting){
                const allImg = entrie.target.querySelectorAll('.lazy-img');
                const backImg = entrie.target.querySelectorAll('.back-form');
                const allMaps = entrie.target.querySelectorAll('.map');
                const allSimpleCardImg = entrie.target.querySelectorAll('.allCardsNodo');
                const allImagesModal = document.querySelectorAll('.modal-card-section');

                
                if(entrie.target.dataset.flag === 'multi-carousel'){
                    allImagesModal.forEach((imgModal)=>{
                      const URL = imgModal.dataset.src;
                      imgModal.src = URL;
                    })
                }
                
                allSimpleCardImg.forEach((simpleImg)=>{
                    const load = simpleImg.querySelector('.img-spiner');
                    const img = simpleImg.querySelector('.img-simpleCard');
                    const url = img.dataset.src;

                    load.style.display = 'none';
                    img.src = url;
                    img.style.display = 'block';

                })

                allMaps.forEach((mapa)=>{
                    const innerMap = mapa.querySelector('.map-inner');
                    innerMap.style.display = 'block';
                })
                
                backImg.forEach((backNodo)=>{
                    backNodo.style.backgroundImage = `url(${backNodo.dataset.src})`
                })

                allImg.forEach((img)=>{
                    img.src = img.dataset.src
                })
            }
          })
      }
      let options = {
        rootMargin: '0px',
        threshold: 0.25
      }
      const observer = new IntersectionObserver(callback, options);

      allNodes.forEach((node)=>{
        observer.observe(node)
      })
  },[])

  return ( 
    <>
        <ProgressBar {...props}/>
        <Anouncement {...props}/>
        <SliderOpacity {...props}/>
        <NavBar {...props}/>
        <About {...props}/>
        <InfoBanner {...props}/>
        <Galeria {...props}/>
        <ContactData {...props}/>
        <Form {...props}/>
        <Footer {...props}/>

    </>
   );
}
 
export default Index;