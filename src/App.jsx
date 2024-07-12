import React, { useState } from 'react';
import SearchContainer from './components/SearchContainer';
import CandleStick from './components/CandeStick';
import CompanyInfo from './components/CompanyInfo';
import './App.scss'
// import Fetch from './Fetch'

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [companyDetails, setCompanyDetails] = useState({ name: '', about: '', database: '' });

  const handleSelectSymbol = (database) => {
    console.log(`Selected company database in handleSelectSymbol: ${database}`);
    setSelectedCompany(database);
  };

  const handleSelectCompany = (database, name, about) => {
    console.log('Selected company details in handleSelectCompany:', { database, name, about });
    setSelectedCompany(database);
    setCompanyDetails({ name, about, database });
  };


  return (
    <div className="main">

      <div className="left">

        <div className="graph">
          {selectedCompany && <CandleStick database={selectedCompany} />}
        </div>

        <div className="info">
          {companyDetails.name && (
          <CompanyInfo 
          name={companyDetails.name} 
          about={companyDetails.about} 
          database={companyDetails.database} 
            />
          )}
        </div>
        
      </div>

      <div className="search">
        <SearchContainer onSelectSymbol={handleSelectSymbol} onSelectCompany={handleSelectCompany} />
      </div>
    </div>
  );
};

export default App;
