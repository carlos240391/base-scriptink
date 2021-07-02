import { ContainerCardModal } from "./card-modal-styles"

const CardModal = (props) => {
    console.log(props);
    const {icon,title,content} = props.product;

    return (  
        <>
        <ContainerCardModal>
            <section className="card-modal-inner">
                <section className="card-modal-inner__img img-cardImg-modal">
                    <img src={icon}  className=""/>  
                </section>
                
                <section className="card-modal-inner__content">
                    <h1>{title}</h1>
                    {/* <h3>{precio}</h3> */}
                    <p>{content}</p>
                </section>
            </section>
        </ContainerCardModal>
        </>
    );
}
 
export default CardModal;