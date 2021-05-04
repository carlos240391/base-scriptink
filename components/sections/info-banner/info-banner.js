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
            <SpacingAbout {...props}>
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
                        <img    src="https://images.unsplash.com/photo-1619267051348-d874f9abcd71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt=""
                                />
                    </section>
                </InfoBannerContainer>
            </SpacingAbout>
        </>
     );
}
 
export default InfoBanner;