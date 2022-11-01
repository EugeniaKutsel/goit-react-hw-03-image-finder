import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async(searchWord) => {
  const response = await axios.get(`/?key=30384018-2d39d03273dba06700386baf1&q=${searchWord}&image_type=photo&pretty=true`);
  return response.data.hits;
}





