import { useEffect, useState, useContext } from 'react';
import { defaultData } from '../../context/defaultContext';
const SectorFilter = () => {
  const {
    data,
    setData,
    setFlag,
    flag,
    changedData,
    setChangedData,
    sectorFilters,
    setSectorFilters,
    sectorfiltersAdded,
    setSectorFiltersAdded,
  } = useContext(defaultData);

  const [toggleFilter, setToggleFilter] = useState(false);

  const addFilter = (val) => {
    let filters = [...sectorfiltersAdded];
    filters.push(val);
    setSectorFiltersAdded(filters);
    let sectorFiltersAux = [...sectorFilters].filter((item) => {
      if (!filters.includes(item)) {
        return { item };
      }
    });
    setSectorFilters(sectorFiltersAux);
    let updatedChangedData = [
      ...data.filter((d) => !filters.includes(d.sector)),
      ...changedData.filter((d) => !filters.includes(d.sector)),
    ];
    let updatedData = [
      ...data.filter((d) => filters.includes(d.sector)),
      ...changedData.filter((d) => filters.includes(d.sector)),
    ];

    setData(updatedData);
    setChangedData(updatedChangedData);
  };

  const removeFilter = (val) => {
    let filters = [...sectorfiltersAdded];
    filters = filters.filter((name) => {
      return val.toLowerCase() !== name.toLowerCase();
    });
    setSectorFiltersAdded(filters);
    let sectorFiltersAux = [...sectorFilters];
    sectorFiltersAux.push(val);
    setSectorFilters(sectorFiltersAux);

    let updateData = [
      ...data.filter((d) => !filters.includes(d.sector)),
      ...changedData.filter((d) => !filters.includes(d.sector)),
    ];
    let updateChangedData = [
      ...data.filter((d) => filters.includes(d.sector)),
      ...changedData.filter((d) => filters.includes(d.sector)),
    ];

    setData(updateData);
    setChangedData(updateChangedData);
  };

  return (
    <div className="border border-sky-500 flex flex-col items-center justify-between h-40 m-2">
      <div className="font-semibold text-2xl">Sector Filters</div>
      <div className=" w-1/4">
        <div>
          <div className="relative inline-block text-center">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => {
                setToggleFilter(toggleFilter === false ? true : false);
              }}
            >
              Add Sector Filters
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {toggleFilter && (
              <div
                className="z-10 h-60 overflow-auto border-4 border-indigo-500/50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                {sectorFilters.map((f, key) => {
                  return (
                    !sectorfiltersAdded.includes(f) && (
                      <div className="py-1" key={key} role="none">
                        <div
                          href="#"
                          className=" cursor-pointer  hover:bg-gray-50  text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                          onClick={() => {
                            addFilter(f);
                            setToggleFilter(
                              toggleFilter === false ? true : false
                            );
                          }}
                        >
                          {f}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            )}
          </div>

          {/* he */}
        </div>
      </div>

      <div className="flex">
        {sectorfiltersAdded.length > 0
          ? sectorfiltersAdded.map((name, key) => {
              return (
                <button
                  key={key}
                  onClick={() => {
                    removeFilter(name);
                  }}
                  type="button"
                  className="text-white flex items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  {name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                    style={{ width: '1.5rem' }}
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
                  </svg>
                </button>
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default SectorFilter;
