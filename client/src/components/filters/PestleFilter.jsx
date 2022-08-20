import { useEffect, useState, useContext } from 'react';
import { defaultData } from '../../context/defaultContext';

const PestleFilter = () => {
  const { data } = useContext(defaultData);

  const [pestleFilters, setPestleFilters] = useState([]);

  // if (data.length > 0) {
  //   var filters = data.map((d) => {
  //     return d.pestle;
  //   });

  //   var availableFilters = [];
  //   for (let i = 0; i < filters.length; i++) {
  //     if (!availableFilters.includes(filters[i]) && filters[i] !== '') {
  //       availableFilters.push(filters[i]);
  //     }
  //   }
  // }
  // useEffect(() => {
  //   setPestleFilters(availableFilters);
  // }, [availableFilters]);

  console.log('pestleFilters', pestleFilters);
  return (
    <div>
      <div>Pestle Filters</div>
      <div>
        {pestleFilters.map((f, key) => {
          return (
            <span>
              <input type="checkbox" id={f} name={f} value="Bike" />
              <label htmlFor={f}>{f}</label>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PestleFilter;
