import React from "react";
import css from "../components/App.module.css";
import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import * as API from "../services/imagesApi";


class App extends React.Component {
  state = {
    searchWord: '',
    images: [],
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchWord !== this.state.searchWord) {
      try {
        const images = await API.getImages(this.state.searchWord);
        this.setState({ images });
      } catch (error) {
        
      }
      
    }
  }

  handleFormSubmit = searchWord => {
    this.setState({ searchWord });
  }

  render() {
    const { images } = this.state;
    return (
      <div className={css.app}>
        <ToastContainer autoClose={2000} hideProgressBar={true}/>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
      </div>
    );
 } 
}

export default App;
