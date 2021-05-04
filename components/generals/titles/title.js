import { WrapperTitle, ContentTitle } from "./titles-landing";


const Title = (props) => {
    return ( 
        <WrapperTitle {...props}>
          <ContentTitle {...props}>
            <section className="title-caja">
              <h3>{props.title}</h3>
              { props.subtitle !== '' && <p>{props.subtitle}</p> }
            </section>
          </ContentTitle>
        </WrapperTitle>
    );
}
 
export default Title;