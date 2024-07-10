import React, { useState } from 'react';
import SearchContainer from './components/SearchContainer';
import CandleStick from './components/CandeStick';

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSelectSymbol = (database) => {
    console.log(`Second Page: ${database}`)
    setSelectedCompany(database);
  };

  return (
    <div>
      <h1>Stock Analysis App</h1>
      <SearchContainer onSelectSymbol={handleSelectSymbol} />
      {selectedCompany && <CandleStick database={selectedCompany} />}
    </div>
  );
};

export default App;
