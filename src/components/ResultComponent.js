import React, { useState } from 'react';

const ResultComponent = () => {
  const [queryId, setQueryId] = useState('');
  const [result, setResult] = useState('');
  const [response, setResponse] = useState('');

  const handleResult = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/result/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query_id: queryId,
          result,
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
      <h1>Result Component</h1>
      <div>
        <label>Query ID: </label>
        <input type="text" value={queryId} onChange={(e) => setQueryId(e.target.value)} />
      </div>
      <div>
        <label>Result: </label>
        <input type="text" value={result} onChange={(e) => setResult(e.target.value)} />
      </div>
      <button onClick={handleResult}>Submit Result</button>
      {response && <div>Response: {response}</div>}
    </div>
  );
};

export default ResultComponent;