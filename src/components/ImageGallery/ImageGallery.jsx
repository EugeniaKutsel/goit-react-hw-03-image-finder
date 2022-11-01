import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
  const elements = images.map(image => 
    <ImageGalleryItem
      key={image.id}
      webFormatUrl={image.webformatURL}
      tags={image.tags}
    />
    )
  return (
    <ul className="gallery">
     {elements}
  </ul>
  )
}

export default ImageGallery;

