import React, { useState } from 'react';
import './SearchContainer.scss';

const SearchContainer = ({ onSelectSymbol, onSelectCompany }) => {
  const [companies] = useState([
    { 
      name: 'Apple', 
      symbol: 'AAPL', 
      database: 'Apple', 
      about: 'Apple Inc. is an American multinational technology company that designs, manufactures, and markets consumer electronics, software, and services.' 
    },
    { 
      name: 'Microsoft', 
      symbol: 'MSFT', 
      database: 'Microsoft', 
      about: 'Microsoft Corporation is an American multinational technology company producing computer software, consumer electronics, and personal computers.' 
    },
    { 
      name: 'Amazon', 
      symbol: 'AMZN', 
      database: 'Amazon', 
      about: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.' 
    },
    { 
      name: 'Google', 
      symbol: 'GOOGL', 
      database: 'Google', 
      about: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, including online advertising and search.' 
    },
    { 
      name: 'Tesla', 
      symbol: 'TSLA', 
      database: 'Tesla', 
      about: 'Tesla, Inc. is an American electric vehicle and clean energy company, specializing in electric cars, battery energy storage, and solar products.' 
    },
    { 
      name: 'NVIDIA', 
      symbol: 'NVDA', 
      database: 'Nvidia', 
      about: 'NVIDIA Corporation is an American multinational technology company that designs graphics processing units (GPUs) for gaming and professional markets.' 
    },
    { 
      name: 'Netflix', 
      symbol: 'NFLX', 
      database: 'Netflix', 
      about: 'Netflix, Inc. is an American subscription streaming service and production company that offers a wide variety of TV shows, movies, and documentaries.' 
    },
    { 
      name: 'Intel', 
      symbol: 'INTC', 
      database: 'Intel', 
      about: 'Intel Corporation is an American multinational corporation and technology company that designs, manufactures, and sells computer processors and related products.' 
    },
    { 
      name: 'AMD', 
      symbol: 'AMD', 
      database: 'Amd', 
      about: 'Advanced Micro Devices, Inc. (AMD) is an American multinational semiconductor company that develops computer processors and related technologies.' 
    },
    { 
      name: 'PayPal', 
      symbol: 'PYPL', 
      database: 'Paypal', 
      about: 'PayPal Holdings, Inc. is an American multinational financial technology company that operates an online payments system in the majority of countries that support online money transfers.' 
    },
    { 
      name: 'Adobe', 
      symbol: 'ADBE', 
      database: 'Adobe', 
      about: 'Adobe Inc. is an American multinational computer software company known for its Adobe Flash web software ecosystem, Photoshop image editing software, and Adobe Creative Suite.' 
    },
    { 
      name: 'Cisco', 
      symbol: 'CSCO', 
      database: 'Cisco', 
      about: 'Cisco Systems, Inc. is an American multinational technology conglomerate that develops, manufactures, and sells networking hardware, software, telecommunications equipment, and other high-technology services and products.' 
    },
    { 
      name: 'IBM', 
      symbol: 'IBM', 
      database: 'Ibm', 
      about: 'International Business Machines Corporation (IBM) is an American multinational technology and consulting company, offering a wide range of hardware, software, and services.' 
    },
    { 
      name: 'Oracle', 
      symbol: 'ORCL', 
      database: 'Oracle', 
      about: 'Oracle Corporation is an American multinational computer technology corporation that sells database software and technology, cloud-engineered systems, and enterprise software products.' 
    },
    { 
      name: 'Uber', 
      symbol: 'UBER', 
      database: 'Uber', 
      about: 'Uber Technologies, Inc. is an American technology company that operates a ride-hailing service, food delivery, package delivery, couriers, freight transportation, and a partnership with Lime scooters and bikes.' 
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectCompanyDetails = (company) => {
    console.log(`Selected company: ${company.database}, ${company.name}, ${company.about}`);
    onSelectCompany(company.database, company.name, company.about); // Pass selected company's data to parent component
  };

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
            onClick={() => {
              handleSelectCompany(company.database);
              handleSelectCompanyDetails(company);
            }}
          >
            {company.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
