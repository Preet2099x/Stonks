import React from 'react'
import './CompanyInfo.scss'

const CompanyInfo = () => {
  return (
    <div className='infoContainer'>
        <h3 className='companyName'>Name</h3>
        <div className="bottom">
          <div className='infoWrapper'>
              <div className='div1'>
                <p>Opening Price:</p>
                <p>Closing Price:</p>
                <p>Volume Traded:</p>
              </div>
              <div className='div2'>
                <p>Highest Price:</p>
                <p>Lowest Price:</p>
                <p>Total Number of Trades:</p>  
              </div>
          </div>
          <div className="companyAbout">
            <h3>About</h3>
            <p></p>
          </div>
        </div>
    </div>
  )
}

export default CompanyInfo