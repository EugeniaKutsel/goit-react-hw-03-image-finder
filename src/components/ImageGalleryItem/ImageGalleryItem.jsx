// import { Component } from "react";
// import Modal from "components/Modal/Modal";
import css from "../ImageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({id, webformatURL, tags}) => {
    return (
        <li className={css.galleryItem} key={id}>
          <img className={css.galleryImage} src={webformatURL} alt={tags} />
        </li>
    );
  }


export default ImageGalleryItem;