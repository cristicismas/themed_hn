import axios from 'axios';

export function apiCall(path) {
  return new Promise((resolve, reject) => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/${path}.json`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}