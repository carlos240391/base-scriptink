import { InitStyles } from '../styles/initStyles'
import {themeSettings} from '../styles/settings'



function MyApp({ Component, pageProps }) {


  return (
    <>  
        <InitStyles themeSettings={themeSettings}/>
        <Component  {...pageProps} 
                    themeSettings={themeSettings}
                    />    
    </>
  )
}

export default MyApp
