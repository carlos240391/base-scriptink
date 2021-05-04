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
                    }, 1000); 
                `
            }}/>
            <link   rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
                    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
                    crossorigin="anonymous"></link>
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