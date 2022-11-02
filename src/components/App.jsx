import React from "react";
import css from "../components/App.module.css";
import { toast, ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/ButtonLoadMore";
import * as API from "../services/imagesApi";

class App extends React.Component {
  state = {
    searchWord: '',
    images: [],
    loading: false,
    page: 1,
    error: false,
  }

  async componentDidUpdate(prevProps, prevState) {
    const { searchWord, page } = this.state;
    if (prevState.page !== page || prevState.searchWord !== searchWord) {
      try {
        this.setState({ loading: true })
        const images = await API.getImages(searchWord, page);
        if (images.length === 0) {
          return toast.error(`Soory, there are no images with ${searchWord} word :( `); 
        } else {
         this.setState(prevState => ({images: [...prevState.images, ...images]}));
        }
      } catch (error) {
       this.setState({error: true})
      } finally {
        this.setState({loading:false})
      }
    }
  }

  handleFormSubmit = searchWord => {
    this.setState({
      searchWord,
      images: [],
      page: 1,
    });
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, loading: true }))
  }

  render() {
    const { images, loading, error } = this.state;
    return (
      <div className={css.app}>
        <ToastContainer autoClose={2000} hideProgressBar={true} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
        {error && <h2 className={css.error}>Ooops, something wrong :( Please, try again </h2>}
        {loading && <Loader />}
        {images.length > 0 && <Button onClick={this.loadMore} />}
      </div>
    );
 } 
}

export default App;
