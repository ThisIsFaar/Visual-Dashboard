import { useState } from 'react';
import CountryFilter from './CountryFilter';
import PestleFilter from './PestleFilter';
import RegionFilter from './RegionFilter';
import SectorFilter from './SectorFilter';
import SourceFilter from './SourceFilter';

const Filter = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <div className="p-6 bg-zinc-100 ">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          onClick={() => {
            toggleFilter === false
              ? setToggleFilter(true)
              : setToggleFilter(false);
          }}
        >
          {toggleFilter ? 'Close Filters' : 'Open Filters'}
        </button>
      </div>
      {toggleFilter === true ? (
        <div
          className="rounded-3xl"
          id="accordion-collapse-body-1"
          aria-labelledby="accordion-collapse-heading-1 "
        >
          <div className="p-5 font-light border  border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ">
            <PestleFilter />
            <SourceFilter />
            <CountryFilter />
            <RegionFilter />
            <SectorFilter />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Filter;
