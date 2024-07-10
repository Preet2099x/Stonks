// Fetch.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetch = ({ symbol }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'wyDUNN3APmscdUfDkXMUaGR865UQk35G'; // Replace with your Polygon.io API key
      const today = new Date().toISOString().slice(0, 10); // Get today's date (YYYY-MM-DD)
      const oneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().slice(0, 10); // Get date one year ago
      const url = `https://api.polygon.io/v2/aggs/ticker/UBER/range/1/day/${oneYearAgo}/${today}?apiKey=${apiKey}`;

      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Stock Data for {symbol}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Fetch;
