// SearchContainer.jsx
import React, { useState } from 'react';

const SearchContainer = ({ onSelectSymbol }) => {
    const [companies] = useState([
        { name: 'Apple', symbol: 'AAPL' },
        { name: 'Microsoft', symbol: 'MSFT' },
        { name: 'Amazon', symbol: 'AMZN' },
        { name: 'Google', symbol: 'GOOGL' },
        { name: 'Tesla', symbol: 'TSLA' },
        { name: 'NVIDIA', symbol: 'NVDA' },
        { name: 'Netflix', symbol: 'NFLX' },
        { name: 'Intel', symbol: 'INTC' },
        { name: 'AMD', symbol: 'AMD' },
        { name: 'PayPal', symbol: 'PYPL' },
        { name: 'Adobe', symbol: 'ADBE' },
        { name: 'Cisco', symbol: 'CSCO' },
        { name: 'IBM', symbol: 'IBM' },
        { name: 'Oracle', symbol: 'ORCL' },
        { name: 'Twitter', symbol: 'TWTR' },
        { name: 'Snapchat', symbol: 'SNAP' },
        { name: 'Shopify', symbol: 'SHOP' },
        { name: 'Uber', symbol: 'UBER' },
        { name: 'Lyft', symbol: 'LYFT' },
      ]);
      


  const handleSelectCompany = (symbol) => {
    onSelectSymbol(symbol); // Pass selected symbol to parent component
  };

  return (
    <div>
      <h2>Company List</h2>
      <div>
        {companies.map((company) => (
          <button key={company.symbol} onClick={() => handleSelectCompany(company.symbol)}>
            {company.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
