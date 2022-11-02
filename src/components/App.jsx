import React from "react";
import css from "../components/App.module.css";
import { ToastContainer } from "react-toastify";
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
  }

  async componentDidUpdate(prevProps, prevState) {
    const { searchWord, page } = this.state;
    if (prevState.page !== page || prevState.searchWord !== searchWord) {
      try {
        this.setState({ loading: true })
        const images = await API.getImages(searchWord, page);
        this.setState({ images: [...prevState.images, ...images]});
      } catch (error) {
        console.log(error);
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
    const { images, loading } = this.state;
    return (
      <div className={css.app}>
        <ToastContainer autoClose={1000} hideProgressBar={true}/>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images}/>
        {loading && <Loader />}
        {images.length > 0 && <Button onClick={this.loadMore} />}
        
      </div>
    );
 } 
}

export default App;
