import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const CandleStick = ({ database }) => {
  console.log(`Page 3: ${database}`)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Importing the JSON file (assuming it's in the data folder)
        const data = await import(`../data/${database}.json`);
        const jsonData = data.default; // Accessing the default export from JSON file

        // Convert data to ApexCharts format
        const formattedData = jsonData.map(item => ({
          x: new Date(item.t),
          y: [item.o, item.h, item.l, item.c]
        }));

        // ApexCharts options
        const options = {
          series: [{
            data: formattedData
          }],
          chart: {
            type: 'candlestick',
            height: 350,
            id: 'candlestick-chart'
          },
          title: {
            text: 'CandleStick Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        };

        // Render ApexCharts
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        // Clean up chart on component unmount
        return () => {
          chart.destroy();
        };
      } catch (error) {
        console.error('Error fetching or rendering chart:', error);
      }
    };

    fetchData();
  }, [database]); // Run useEffect whenever database prop changes

  return (
    <div id="chart">
      {/* Chart will be rendered here */}
    </div>
  );
};

export default CandleStick;
