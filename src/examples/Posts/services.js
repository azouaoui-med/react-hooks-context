import axios from 'axios';

export const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
};
