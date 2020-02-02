import axios from 'axios';

export const appId = process.env.REACT_APP_ID;
export const appSecret = process.env.REACT_APP_SECRET;
export const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

export const auth = axios.create({
  baseURL: 'https://accounts.spotify.com/',
  timeout: 10000
})

export const spotify = axios.create({
  baseURL: 'https://api.spotify.com/',
  timeout: 5000
});

export const uri = {
  renew_access: 'api/token',
  current_track: 'v1/me/player/currently-playing'
};
