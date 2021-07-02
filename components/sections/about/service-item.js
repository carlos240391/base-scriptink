import React from 'react'
import { Anchor } from "../../generals/buttons/buttons";
import CardModal from '../card-modal/card-modal';
import ModalAlt from '../modal-alt/modal';



const ServiceItem = (props) => {
    const {service} = props;
    const [active, setActive] = React.useState(false);

    return (  
        <>
        <ModalAlt   inner={<CardModal product={service} {...props}/>}
                    active={active}
                    setActive={setActive}
                    />
    
        <section   className="services-card"
                    >
            <img    className="lazy-img"
                    data-src={service.icon}
                    />
            <br/>
            <small>{service.subheading}</small>
            <h3>{service.title}</h3>
            <Anchor backColor="none"
                    textColor={props.themeSettings.aboutSettings.colorSubheading}
                    onClick={()=>{setActive(true)}}
                    >Ver más</Anchor>
            {/* <p>{service.content}</p> */}
        </section>
        </>
    );
}
 
export default ServiceItem;