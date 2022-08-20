import { useContext, useState } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';
import { useEffect } from 'react';

const Region = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
    var regionNames = [];
    var chartData = [];
    for (let i = 0; i < data.length; i++) {
      if (!regionNames.includes(data[i].region) && data[i].region !== '') {
        regionNames.push(data[i].region);
      }
    }
    regionNames.sort();

    var regionCount = Array(regionNames.length).fill(0);

    for (let i = 0; i < data.length; i++) {
      if (data[i].region !== '') {
        regionCount[regionNames.indexOf(data[i].region)]++;
      }
    }

    for (let i = 0; i < regionNames.length; i++) {
      let obj = {
        x: regionNames[i],
        y: regionCount[i],
      };
      chartData.push(obj);
    }
  }
  const [regionNameState, setRegionNameState] = useState([]);
  const [regionCountState, setRegionCountState] = useState([]);
  const [chartDataState, setChartDataState] = useState(chartData);

  useEffect(() => {
    setRegionCountState(regionCount);
  }, regionCount);
  useEffect(() => {
    setRegionNameState(regionNames);
  }, regionNames);
  useEffect(() => {
    setChartDataState(chartData);
  }, chartData);
  return (
    <div className="p-8 m-2 bg-white rounded-2xl drop-shadow-2xl">
      <Chart
        series={[
          {
            data: chartDataState,
          },
        ]}
        options={{
          legend: {
            show: false,
          },
          chart: {
            height: 350,
            type: 'treemap',
          },
          title: {
            text: 'Region Distibuted Treemap',
            align: 'center',
          },
          colors: [
            '#3B93A5',
            '#F7B844',
            '#ADD8C7',
            '#EC3C65',
            '#CDD7B6',
            '#C1F666',
            '#D43F97',
            '#1E5D8C',
            '#421243',
            '#7F94B0',
            '#EF6537',
            '#C0ADDB',
          ],
          plotOptions: {
            treemap: {
              distributed: true,
              enableShades: false,
            },
          },
        }}
        type="treemap"
        width={1000}
        height={700}
      />
    </div>
  );
};

export default Region;
