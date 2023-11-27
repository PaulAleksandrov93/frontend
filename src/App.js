import React from 'react';
import QueryComponent from './components/QueryComponent';
import ResultComponent from './components/ResultComponent';
import PingComponent from './components/PingComponent';
import HistoryComponent from './components/HistoryComponent';

function App() {
  return (
    <div className="App">
      <QueryComponent />
      <ResultComponent />
      <PingComponent />
      <HistoryComponent />
    </div>
  );
}

export default App;