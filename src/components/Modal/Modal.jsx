import React from 'react';
import { createPortal } from 'react-dom';
import css from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
  }
  
  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }


  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot);
  }
}

export default Modal;

