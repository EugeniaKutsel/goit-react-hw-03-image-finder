import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const elements = images.map(image => 
    <ImageGalleryItem
      key={image.id}
      webFormatUrl={image.webformatURL}
      tags={image.tags}
    />
    )
  return (
    <ul className={css.gallery}>
     {elements}
  </ul>
  )
}

export default ImageGallery;

