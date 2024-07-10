import React, { useState } from 'react';
// import Fetch from './Fetch';
// import SearchContainer from './components/SearchContainer';
import CandleStick from './components/CandeStick';

const App = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleSelectSymbol = (symbol) => {
    setSelectedSymbol(symbol); // Update selected symbol state
  };

  return (
    <div>
      {/* <h1>Stock Analysis App</h1>
      <SearchContainer onSelectSymbol={handleSelectSymbol} />
      {selectedSymbol && <Fetch symbol={selectedSymbol} />} */}
      <CandleStick/>
    </div>
  );
};

export default App;
