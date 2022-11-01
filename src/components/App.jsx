import React from "react";
import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";

class App extends React.Component {
  state = {
    searchWord: '',
    images: [],
  }

  handleFormSubmit = searchWord => {
    this.setState({ searchWord, images: [], });
  }

  render() {
    return (
      <div>
        <ToastContainer autoClose={2000} hideProgressBar={true}/>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </div>
    );
 } 
}

export default App;
