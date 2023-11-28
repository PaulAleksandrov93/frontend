import React, { useState } from 'react';

const PingComponent = () => {
  const [response, setResponse] = useState('');

  const handlePing = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/ping/");
      const data = await response.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Ping Component</h1>
      <button onClick={handlePing}>Ping Server</button>
      {response && <div>Response: {response}</div>}
    </div>
  );
};

export default PingComponent;