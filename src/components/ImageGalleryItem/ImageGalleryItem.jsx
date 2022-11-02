import { Component } from "react";
import Modal from "components/Modal/Modal";
import css from "../ImageGalleryItem/ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(prevState => ({showModal: !prevState.showModal}))
  }

  render() {
    const { tags, webformatURL, largeImageURL, } = this.props;
    return (
      <>
        <li className={css.galleryItem} >
          <img className={css.galleryImage} src={webformatURL} alt={tags} onClick={this.toggleModal} />
        </li>
        {this.state.showModal && <Modal
          largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}/>}
      </>
    );
  }
  
}

export default ImageGalleryItem;