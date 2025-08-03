import React, { useState } from 'react';

function Search({ onSearch }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg max-w-xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Minimum Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="w-full p-2 border rounded"
        min={0}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
