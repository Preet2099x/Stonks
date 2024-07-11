import React, { useState } from 'react';
import SearchContainer from './components/SearchContainer';
import CandleStick from './components/CandeStick';
import CompanyInfo from './components/CompanyInfo';
// import Fetch from './Fetch'

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSelectSymbol = (database) => {
    console.log(`Second Page: ${database}`)
    setSelectedCompany(database);
  };

  return (
    <div>
      <h1>Stock Analysis App</h1>
      {/* <SearchContainer onSelectSymbol={handleSelectSymbol} /> */}
      <CompanyInfo/>
      {/* {selectedCompany && <CandleStick database={selectedCompany} />} */}
      {/* <Fetch/> */}
    </div>
  );
};

export default App;
