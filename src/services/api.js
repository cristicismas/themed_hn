import axios from 'axios';

export function apiCall(path, data) {
  return new Promise((resolve, reject) => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/${path}.json`, data)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}