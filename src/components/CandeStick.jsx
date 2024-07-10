import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const CandleStick = () => {
  useEffect(() => {
    const jsonData = [
      {
        "v": 61889289,
        "vw": 127.083,
        "o": 129.07,
        "c": 127.13,
        "h": 129.28,
        "l": 125.915,
        "t": 1688961600000,
        "n": 569506
      },
      {
        "v": 49951460,
        "vw": 128.6314,
        "o": 127.75,
        "c": 128.78,
        "h": 129.77,
        "l": 127.35,
        "t": 1689048000000,
        "n": 445921
      },
      {
        "v": 53922847,
        "vw": 130.2768,
        "o": 130.31,
        "c": 130.8,
        "h": 131.26,
        "l": 128.83,
        "t": 1689134400000,
        "n": 458437
      }
    ];

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
  }, []); // Run useEffect only once on component mount

  return (
    <div id="chart">
      {/* Chart will be rendered here */}
    </div>
  );
};

export default CandleStick;
