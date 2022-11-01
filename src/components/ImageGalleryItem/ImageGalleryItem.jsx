import css from "../ImageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webFormatUrl, tags }) => {
  return (
    <li className={css.galleryItem} key={id}>
      <img className={css.galleryImage} src={webFormatUrl} alt={tags} />
    </li>
  );
}

export default ImageGalleryItem;