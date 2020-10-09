import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'text/xml; charset=utf-8',
  },
});

export default api;
