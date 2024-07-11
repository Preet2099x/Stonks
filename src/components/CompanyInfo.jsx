import React, { useState, useEffect } from 'react';
import './CompanyInfo.scss';

const CompanyInfo = ({ name, about, database }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await import(`../data/${database}.json`);
        // Assuming `data.default` is an array, set the first element to state
        if (Array.isArray(data.default) && data.default.length > 0) {
          setJsonData(data.default[0]);
        }
      } catch (error) {
        console.error('Error loading JSON data:', error);
      }
    };

    fetchData();
  }, [database]);

  return (
    <div className='infoContainer'>
      <h3 className='companyName'>{name}</h3>
      <div className="bottom">
        <div className='infoWrapper'>
          <div className='div1'>
            <p>Opening Price: {jsonData ? `$${jsonData.o}` : 'Loading...'}</p>
            <p>Closing Price: {jsonData ? `$${jsonData.c}` : 'Loading...'}</p>
            <p>Volume Traded: {jsonData ? jsonData.v : 'Loading...'}</p>
          </div>
          <div className='div2'>
            <p>Highest Price: {jsonData ? `$${jsonData.h}` : 'Loading...'}</p>
            <p>Lowest Price: {jsonData ? `$${jsonData.l}` : 'Loading...'}</p>
            <p>Total Number of Trades: {jsonData ? jsonData.n : 'Loading...'}</p>  
          </div>
        </div>
        <div className="companyAbout">
          <h3>About</h3>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
