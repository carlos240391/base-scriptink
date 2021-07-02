import React from 'react';
import Title from "../../generals/titles/title"
import { GContainer, GWrapper, SpacingAbout } from "../../generals/wrapper/wrapper"
import { FaqsContainer } from "./faqs-styles"

const Faqs = (props) => {

    const {
        faqsImg,
        faqs
    } = props.themeSettings.faqsSettings

    const tabsToggle = React.useCallback(()=>{
        const allTabs = document.querySelectorAll('.js-tab-click');
        const allContent = document.querySelectorAll('.js-tab-content');
        allTabs.forEach((tab,i)=>{
            tab.addEventListener('click', ()=>{
                const item = allContent[i];
                if(item.getBoundingClientRect().height > 0){
                    item.classList.remove('faq-content-active');
                    tab.classList.remove('faq-tab-click-active');
                }else{
                    allContent.forEach((f)=> f.classList.remove('faq-content-active'));
                    allTabs.forEach((f)=> f.classList.remove('faq-tab-click-active'));
                    item.classList.add('faq-content-active');
                    tab.classList.add('faq-tab-click-active');
                }
            })
        })
    },[])
    React.useEffect(()=>{
        tabsToggle();
    },[tabsToggle])


    return (  
        <>
        <section className="spy-nodo" id="faqs">
        <section className="content-nodo">

        
          
           <SpacingAbout className="section-landing">
               <Title   {...props}
                        title="Preguntas frecuentes"
                        subtitle="Estamos asu servicio los 365 días del año."
                        position="center"
                        />
                <GWrapper>
                    <GContainer {...props}>
                        <FaqsContainer {...props}>
                            <section className="faqs-img">
                                <img    className="lazy-img"
                                        data-src={faqsImg}
                                        /> 
                            </section>
                            <section className="faqs-tabs">
                            {
                                faqs.map((faq,i)=>{
                                    return(
                                        <section key={i}>
                                            <section className="js-tab-click faq-tab-click">
                                                <span className="tab-click-title">{faq.title}</span>
                                                <span className="tab-click-icon"><i className="fas fa-caret-right"></i></span>
                                            </section>
                                            <section className="js-tab-content faq-content">
                                                <div className="faq-content__inner">
                                                    {faq.content}
                                                </div>
                                            </section>
                                        </section>
                                    )
                                })
                            }
                            </section>
                        </FaqsContainer>
                    </GContainer>
                </GWrapper>
           </SpacingAbout>
        </section>
        </section>
        </>
    );
}
 
export default Faqs;