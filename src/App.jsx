import React, { useState, useEffect } from 'react';
import Fetch from './Fetch';
import SearchContainer from './components/SearchContainer';
import CandleStick from './components/CandeStick';

const App = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [stockData, setStockData] = useState(null); // State to hold fetched data

  // Function to handle symbol selection
  const handleSelectSymbol = (symbol) => {
    setSelectedSymbol(symbol); // Update selected symbol state
  };

  // Effect to fetch data when selectedSymbol changes
  useEffect(() => {
    if (selectedSymbol) {
      // Fetch data when selectedSymbol is set
      const fetchData = async () => {
        try {
          const response = await fetch(`your_api_endpoint/${selectedSymbol}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setStockData(data); // Update stockData state with fetched data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [selectedSymbol]);

  return (
    <div>
      <h1>Stock Analysis App</h1>
      <SearchContainer onSelectSymbol={handleSelectSymbol} />
      {selectedSymbol && <Fetch symbol={selectedSymbol} />}
      {/* {stockData && <CandleStick data={stockData} />} */}
      <CandleStick/>
    </div>
  );
};

export default App;
