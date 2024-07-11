import React from 'react'

const CompanyInfo = () => {
  return (
    <div className='infoWrapper'>
        <h1 className='companyName'>{name}</h1>
        <div className='infoContainer'>
            <pre className='div1'>
                Opening Price: {o}
                Closing Price: {c}
                Volume Traded: {v}
            </pre>
            <pre className='div2'>
                Highest Price: {h}
                Lowest Price: {l}
                Total Number of Trades: {n}
            </pre>
        </div>
    </div>
  )
}

export default CompanyInfo