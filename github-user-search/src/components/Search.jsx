import { fetchUserData, fetchAdvancedUserSearch } from '../services/githubService';
import React, { useState } from 'react';
import { fetchAdvancedUserSearch } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await fetchAdvancedUserSearch(username, location, minRepos);
      setResults(data.items || []);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}

      {results.length > 0 && results.map(user => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} width={50} />
          <p>{user.login}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">Visit Profile</a>
        </div>
      ))}
    </div>
  );
}

export default Search;
