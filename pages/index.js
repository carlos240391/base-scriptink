import LayoutGeneral from "../components/layout/layout-general"
import About from "../components/sections/about/about"
import Faqs from "../components/sections/faqs/faqs"
import InfoBanner from "../components/sections/info-banner/info-banner"
import SliderOpacity from "../components/sections/slider_opacity/slider_opacity"

const Index = (props) => {

  return ( 
    <>
      <LayoutGeneral {...props}>
        <SliderOpacity {...props}/>
        <div id="flag-scroll"></div>
        <About {...props}/>
        <InfoBanner {...props}/>
        <Faqs {...props}/>
      </LayoutGeneral>
    </>
   );
}
 
export default Index;