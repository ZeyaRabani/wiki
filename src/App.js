import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    window.open(`https://en.wikipedia.org/w/index.php?title=Special:Search&search=${searchTerm}`);
  };

  return (
    <div className="container">
      <h1>Wikipedia Search Engine made by Zeya</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default App;
