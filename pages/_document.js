import Document, { Html, Head, Main, NextScript } from 'next/document'
import {themeSettings} from '../styles/settings';



class MyDocument extends Document {

  render() {

    const {fontURL} = themeSettings.general;

    return (
      <Html lang="en">
        <Head>
            <script dangerouslySetInnerHTML={{
                __html:`
                    setTimeout(() => {
                        const fragment = document.createDocumentFragment()

                        const createFont = document.createElement('link');
                        createFont.href = ${fontURL};
                        createFont.rel = "stylesheet";

                        const createPreconnect = document.createElement('link');
                        createPreconnect.rel = "preconnect";
                        createPreconnect.href ="https://fonts.gstatic.com";

                        fragment.append(createPreconnect, createFont);
                        document.head.append(fragment);
                    }, 2500); 


                    setTimeout(() => {
                        const fragment = document.createDocumentFragment()
                        
                        const createFontAwesome = document.createElement('link');
                        createFontAwesome.href = "https://use.fontawesome.com/releases/v5.15.3/css/all.css";
                        createFontAwesome.rel = "stylesheet";
                        createFontAwesome.integrity = "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk";
                        createFontAwesome.crossOrigin = "anonymous";

                        fragment.append(createFontAwesome);
                        document.head.append(fragment);
                      

                    }, 2500);

                    setTimeout(() => {
                        const fragment = document.createDocumentFragment();

                        const createSlick = document.createElement('link');
                        createSlick.rel = 'stylesheet';
                        createSlick.type = 'text/css';
                        createSlick.charset = 'UTF-8';
                        createSlick.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css';

                        const createSlickCss = document.createElement('link');
                        createSlickCss.rel = 'stylesheet';
                        createSlickCss.type = 'text/css';
                        createSlickCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css';

                        fragment.append(createSlick, createSlickCss);
                        document.head.append(fragment);

                    }, 2500);
                    
                    window.addEventListener('load', ()=>{
                        document.querySelector('#load').style.display = 'none';
                    })
                `
            }}/>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument