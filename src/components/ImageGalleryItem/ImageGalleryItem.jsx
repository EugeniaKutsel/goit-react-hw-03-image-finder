import { Component } from "react";
import Modal from "components/Modal/Modal";
import css from "../ImageGalleryItem/ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <li className={css.galleryItem} key={id} >
          <img className={css.galleryImage} src={webformatURL} alt={tags} onClick={this.toggleModal}/>
        </li>
        {this.state.showModal && <Modal onClose={this.toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>}
      </>
    );
  }
    
  }


export default ImageGalleryItem;