import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

const CandleStick = () => {
  useEffect(() => {
    // Importing the JSON file (assuming it's in the data folder)
    import('../data/Amd.json').then(data => {
      const jsonData = data.default; // Accessing the default export from Amazon.json

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
          height: 350
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
    });
  }, []); // Run useEffect only once on component mount

  return (
    <div id="chart">
      {/* Chart will be rendered here */}
    </div>
  );
};

export default CandleStick;
