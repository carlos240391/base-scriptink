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
                }else{
                    allContent.forEach((f)=> f.classList.remove('faq-content-active'));
                    item.classList.add('faq-content-active');
                }
            })
        })
    },[])
    React.useEffect(()=>{
        tabsToggle();
    },[tabsToggle])


    return (  
        <>
           <SpacingAbout>
               <Title   {...props}
                        title="Preguntas frecuentes"
                        subtitle="Estamos asu servicio los 365 días del año."
                        position="center"
                        />
                <GWrapper>
                    <GContainer {...props}>
                        <FaqsContainer>
                            <section className="faqs-img">
                                <img src={faqsImg} width="200px"/> 
                            </section>
                            <section className="faqs-tabs">
                                <h1>¿Tienes dudas? contactanos</h1>
                                {
                                    faqs.map((faq,i)=>{
                                        return(
                                            <section key={i}>
                                                <section className="js-tab-click faq-tab-click">
                                                    {faq.title}
                                                </section>
                                                <section className="js-tab-content faq-content">
                                                    {faq.content}
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
        </>
    );
}
 
export default Faqs;