import React, { useState, useEffect } from 'react';

const HistoryComponent = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/history/");
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h1>History Component</h1>
      <ul>
        {history.map((query) => (
          <li key={query.id}>
            Query ID: {query.id}, Cadastre Number: {query.cadastre_number}, Latitude: {query.latitude}, Longitude: {query.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryComponent;