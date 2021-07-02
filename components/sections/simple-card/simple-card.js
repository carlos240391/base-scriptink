import React from 'react'
import {SimpleCardStyles} from './simple-card-styles';
import Modal from '../modal/modal'
import CardModal from '../card-modal/card-modal';
import ImageGalery from '../image-galery/image-galery';

const SimpleCard = (props) => {

    const [active, setActive] = React.useState(false);
    const {title,description,src, button, precio} = props.product 
    const sliceDescription = `${description.slice(0,60)}...`

    return ( 
        <>
        <Modal  inner={<ImageGalery product={props.product}/> }
                active={active}
                setActive={setActive}
                />
        <SimpleCardStyles {...props} onClick={()=> setActive(true)}>
            <section style={{padding:'20px 10px'}}>
            <section className="s-card">
                <section className="s-card__img allCardsNodo" >
                    <div className="img-spiner">Cargando...</div>
                    <img src="" data-src={src} className="img-simpleCard" style={{display:'none'}}/>
                </section>

                {/* <section className="s-card__txt">
                    <h3>{title}</h3>
                    <p>{sliceDescription}</p>
                    <small>{precio}</small>
                    <button onClick={()=> setActive(true)}>{button}</button>
                </section> */}
            </section>
            </section>
        </SimpleCardStyles>
        </>
     );
}
 
export default SimpleCard;