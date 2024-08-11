import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const UrlTable = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const result = await axios.get('/url');
      setUrls(result.data);
    };
    fetchUrls();
  }, []);

  return (
    <div>
      <h2>URL List</h2>
      <table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Long URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map(url => (
            <tr key={url._id}>
              <td>{url.shortUrl}</td>
              <td>{url.longUrl}</td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlTable;
