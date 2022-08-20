import { useEffect, useState, useContext } from 'react';
import { defaultData } from '../../context/defaultContext';

const SourceFilter = () => {
  const { data } = useContext(defaultData);

  const [sourceFilters, setSourceFilters] = useState([]);

  if (data.length > 0) {
    var filters = data.map((d) => {
      return d.pestle;
    });

    let availableFilters = [];
    for (let i = 0; i < filters.length; i++) {
      if (!availableFilters.includes(filters[i])) {
        availableFilters.push(filters[i]);
      }
    }
  }
  return <div>SourceFilter</div>;
};

export default SourceFilter;
