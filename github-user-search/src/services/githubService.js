import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

export const searchUsers = async (query) => {
  const response = await githubApi.get(`/search/users?q=${query}`);
  return response.data.items;
};

export const getUserDetails = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export const fetchUserData = searchUsers;

