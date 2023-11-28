import React, { useState } from 'react';

const QueryComponent = () => {
  const [cadastreNumber, setCadastreNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/query/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cadastreNumber,
          latitude,
          longitude,
        }),
      });

      const data = await response.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Query Component</h1>
      <div>
        <label>Cadastre Number: </label>
        <input type="text" value={cadastreNumber} onChange={(e) => setCadastreNumber(e.target.value)} />
      </div>
      <div>
        <label>Latitude: </label>
        <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      </div>
      <div>
        <label>Longitude: </label>
        <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </div>
      <button onClick={handleQuery}>Send Query</button>
      {response && <div>Response: {response}</div>}
    </div>
  );
};

export default QueryComponent;