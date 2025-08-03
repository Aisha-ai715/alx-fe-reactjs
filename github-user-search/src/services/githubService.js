import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

export const fetchAdvancedUserSearch = async (username, location, minRepos) => {
  let queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(' ').trim();

  if (!query) {
    throw new Error('No search criteria provided.');
  }

  const response = await githubApi.get(`/search/users?q=${encodeURIComponent(query)}`);
  return response.data;
};

export const searchGitHubUsers = fetchAdvancedUserSearch;
