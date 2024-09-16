import axios from 'axios';

const client_id = '507923f2af184e5aa451248b05518197';
const client_secret = 'f649964ae4074e49914dcf30b1dc49f7';
const token =
  'Bearer   BQAzdTrjNCcCB3D3BVpwxBmXF5EtmF3Q2W5LlK1vf6QfVkvXN63bGAOpIUytKZBJYO-LVh_AwpBnvOsMM2jBPdQeZjs1_qGFsQypjhTpd7MiaYE2EUM';


  export function Token(token : string){
    token = `Bearer ${token}`
  }

async function getToken() {
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      {
        grant_type: `client_credentials`,
        client_id: `${client_id}`,
        client_secret: `${client_secret}`,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    // console.log('response', response);
    return response.data.access_token;
  } catch (error) {
    console.log('Error Fetching token', error);
    throw error;
  }
}

async function getSpotifyData(access_token: string) {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/artists/6rqhFgbbKwnb9MLmUQDhG6',
      {
        headers: {
          Authorization:
            'Bearer BQAky77wJbgXqqD6nXryO9YVGcxUOapaY2i_GB7JIBjKwo4PxV6BhqFoVGIi46K3ZtqTdmbL4iGnIF2gm_tN0QakgmSt3eq_Z4kOtQizv4ineHNKPQs',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getCategories() {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/browse/categories',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getGenres() {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getSeveralAlbums() {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/browse/new-releases',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}


async function getSeveralTracks() {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}

async function getRecommendations() {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Fetching Spotify Data', error);
    throw error;
  }
}



export const Apis = {
  getToken,
  getSpotifyData,
  getCategories,
  getGenres,
  getSeveralAlbums,
  getSeveralTracks,
  getRecommendations
};
