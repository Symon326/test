import React, { useState } from 'react';
import axios from '../services/api';

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/url/shorten', { longUrl });
    setShortUrl(response.data.shortUrl);
  };

  return (
    <div>
      <h2>Shorten URL</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" required value={longUrl} onChange={e => setLongUrl(e.target.value)} placeholder="Enter Long URL" />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && <p>Shortened URL: {shortUrl}</p>}
    </div>
  );
};

export default UrlShortener;