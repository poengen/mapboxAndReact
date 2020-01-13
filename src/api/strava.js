import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.strava.com/api/v3',
  headers: {
    Authorization:
      'Bearer f883820df4e44092cde8f5fce731c1dfd84bab65',
  },
});
