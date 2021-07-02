import { ImageGaleryContent } from "./image-galery-styles"

const ImageGalery = (props) => {

console.log(props);

    return (  
        <>
        <ImageGaleryContent>
            <img src={props.product.src}/>
        </ImageGaleryContent>
        </>
    );
}
 
export default ImageGalery;