import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const elements = images.map(image => 
    <ImageGalleryItem
      key={image.id}
      webformatURL={image.webformatURL}
      tags={image.tags}
      // largeImageURL={image.largeImageURL}
    />
    )
  return (
    <ul className={css.gallery}>
     {elements}
  </ul>
  )
}

export default ImageGallery;

