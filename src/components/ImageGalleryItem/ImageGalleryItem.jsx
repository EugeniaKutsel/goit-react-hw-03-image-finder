const ImageGalleryItem = ({ id, webFormatUrl, tags}) => {
  return (
    <li className="gallery-item" key={id}>
      <img src={webFormatUrl} alt={tags} />
    </li>
  );
}

export default ImageGalleryItem;