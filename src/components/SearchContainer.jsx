import React, { useState } from 'react';
import './SearchContainer.scss';

const SearchContainer = ({ onSelectSymbol }) => {
  const [companies] = useState([
    { name: 'Apple', symbol: 'AAPL', database: 'Apple' },
    { name: 'Microsoft', symbol: 'MSFT', database: 'Microsoft' },
    { name: 'Amazon', symbol: 'AMZN', database: 'Amazon' },
    { name: 'Google', symbol: 'GOOGL', database: 'Google' },
    { name: 'Tesla', symbol: 'TSLA', database: 'Tesla' },
    { name: 'NVIDIA', symbol: 'NVDA', database: 'Nvidia' },
    { name: 'Netflix', symbol: 'NFLX', database: 'Netflix' },
    { name: 'Intel', symbol: 'INTC', database: 'Intel' },
    { name: 'AMD', symbol: 'AMD', database: 'Amd' },
    { name: 'PayPal', symbol: 'PYPL', database: 'Paypal' },
    { name: 'Adobe', symbol: 'ADBE', database: 'Adobe' },
    { name: 'Cisco', symbol: 'CSCO', database: 'Cisco' },
    { name: 'IBM', symbol: 'IBM', database: 'Ibm' },
    { name: 'Oracle', symbol: 'ORCL', database: 'Oracle' },
    { name: 'Uber', symbol: 'UBER', database: 'Uber' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectCompany = (database) => {
    console.log(`Selected company database: ${database}`);
    onSelectSymbol(database); // Pass selected company's database name to parent component
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='SearchContainer'>
      <input
        type="search"
        placeholder='Search Company Name'
        className='searchBar'
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className='buttonContainer'>
        {filteredCompanies.map((company) => (
          <button 
            className='buttons' 
            key={company.symbol} 
            onClick={() => handleSelectCompany(company.database)}
          >
            {company.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
