import Spiner from '../components/sections/spinner/spinner'
import { InitStyles } from '../styles/initStyles'
import {themeSettings} from '../styles/settings'



function MyApp({ Component, pageProps }) {


  return (
    <>  
        <section id="inicio"></section>
        <Spiner themeSettings={themeSettings}/>
        <InitStyles themeSettings={themeSettings}/>
        <Component  {...pageProps} 
                    themeSettings={themeSettings}
                    />    
    </>
  )
}

export default MyApp
