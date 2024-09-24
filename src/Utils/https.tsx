import axios from 'axios';
import {logOut} from '../../Store/Redux/authSlice';
import {store} from '../../Store/Redux/store';

const client_id = '507923f2af184e5aa451248b05518197';
const client_secret = 'f649964ae4074e49914dcf30b1dc49f7';

const accountInstance = axios.create({
  baseURL: 'https://accounts.spotify.com/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

const apiInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

apiInstance.interceptors.request.use(
  function (config) {
    let token = store.getState()?.auth?.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

apiInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logOut());
    }
    return Promise.reject(error);
  },
);

async function getToken() {
  try {
    const response = await accountInstance.post('/token', {
      grant_type: `client_credentials`,
      client_id: `${client_id}`,
      client_secret: `${client_secret}`,
    });
    console.log('response====>', response);

    return response.data.access_token;
  } catch (error) {
    console.log('Error Fetching token', error);
    throw error;
  }
}

async function getCategories() {
  try {
    const response = await apiInstance.get('/browse/categories');
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getGenres() {
  try {
    const response = await apiInstance.get(
      '/recommendations/available-genre-seeds',
    );
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getSeveralAlbums() {
  try {
    const response = await apiInstance.get('/browse/new-releases');
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getSeveralTracks() {
  try {
    const response = await apiInstance.get(
      '/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B',
    );
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getRecommendations() {
  try {
    const response = await apiInstance.get(
      '/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA',
    );
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getAlbums(id: string) {
  try {
    const response = await apiInstance.get(`/albums/${id}`);

    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getTrack(id: string) {
  try {
    const response = await apiInstance.get(`tracks/${id}`);

    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

export const Apis = {
  getToken,
  getCategories,
  getGenres,
  getSeveralAlbums,
  getSeveralTracks,
  getRecommendations,
  getAlbums,
  getTrack,
};
