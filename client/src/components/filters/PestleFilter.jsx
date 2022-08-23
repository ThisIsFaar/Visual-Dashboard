import { useEffect, useState, useContext } from 'react';
import { defaultData } from '../../context/defaultContext';
const PestleFilter = () => {
  const { data, setData } = useContext(defaultData);

  const [pestleFilters, setPestleFilters] = useState([]);

  if (data.length > 0) {
    var filters = data.map((d) => {
      return d.pestle;
    });

    var availableFilters = [];
    for (let i = 0; i < filters.length; i++) {
      if (!availableFilters.includes(filters[i]) && filters[i] !== '') {
        availableFilters.push(filters[i]);
      }
    }
  }
  useEffect(() => {
    setPestleFilters(availableFilters);
  }, [availableFilters]);

  console.log('pestleFilters', pestleFilters);
  return (
    <div className="border border-sky-500 ">
      <div className="font-semibold text-2xl">Pestle Filters</div>
      <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
        <input
          type="search"
          id="search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search"
          required
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
        >
          Add
        </button>
      </div>

      <div>
        <button
          type="button"
          className="text-white flex items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          India{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="white"
            style={{ width: '1.5rem' }}
          >
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PestleFilter;
