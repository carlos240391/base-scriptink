import { Anchor } from "../../generals/buttons/buttons";
import { SpacingAbout } from "../../generals/wrapper/wrapper"
import { InfoBannerContainer } from "./info-banner-styles";

const InfoBanner = (props) => {

    const {
        backColorInfo,
        textColorInfo,
        anchorTitle,
        anchorLink,
        subheading,
        title,
        content
    } = props.themeSettings.infoBannerSettings

    return ( 
        <>
        <section className="spy-nodo">
        <section className="content-nodo">

        
            <SpacingAbout {...props} className="section-landing">
                <InfoBannerContainer {...props}>
                    <section className="info-content">
                        <section className="info-content__body">

                        <small>{subheading}</small>
                        <h1>{title}</h1>
                        <p>{content}</p>
                        
                        <div className="info-content__body-anchor">
                            <Anchor href={anchorLink}
                                    backColor={textColorInfo}
                                    textColor={backColorInfo}
                                    >{anchorTitle}</Anchor>
                        </div>
                        </section>
                    </section>

                    <section className="info-img">
                        <img className="lazy-img" data-src="/img/middle.jpg"/>
                    </section>
                </InfoBannerContainer>
            </SpacingAbout>
        </section>
        </section>
        </>
     );
}
 
export default InfoBanner;