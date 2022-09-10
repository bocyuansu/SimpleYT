import axios from 'axios';

const KEY = 'AIzaSyClwrU2O9UIvLFqXVtEoSnUDzSGfYiGLt4';

// export const Videos = axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3',
//   params: {
//     part: 'snippet',
//     type: 'video',
//     maxResults: 10,
//     key: KEY,
//   },
// });

// export const Comments = axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3/commentThreads',
//   params: {
//     part: 'snippet,replies',
//     key: KEY,
//   },
// });

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY,
  },
});
