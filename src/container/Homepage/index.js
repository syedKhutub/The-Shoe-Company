import React, { useState } from 'react';
import Dashboard from '../Dashboard';
import Filter from '../Filter';
import './css/index.css';
import { ALL_SHOES } from '../Dashboard/constants';

function Homepage() {
    const [selectedFilter, setSelectedFilter] = useState({
        categories: [],
        size: []
    });
    const clearFilter = () => {
        setSelectedFilter({
            categories: [],
            size: []
        });
    };
    const disableClearFilterButton = () => {
        if (
            (selectedFilter.categories.length ||
            selectedFilter.size.length)  === 0
        ) {
            return true;
        }
        return false;
    };
    const isOptionSelected = (filterName, filterOption) => {
        let modifiedState = JSON.parse(JSON.stringify(selectedFilter));
        return modifiedState[filterName].includes(filterOption);
    };
    const handleChangeCheckbox = (filterName, userClickedOption) => {
        let modifiedState = JSON.parse(JSON.stringify(selectedFilter));
        if (!modifiedState[filterName].includes(userClickedOption)) {
            modifiedState[filterName].push(userClickedOption);
        } else {
            modifiedState[filterName] = modifiedState[filterName].filter(
            (alreadySelected) => alreadySelected !== userClickedOption,
            );
        }
        setSelectedFilter(modifiedState);
    };
  return (
    <div className="App">
        <div style={{ display: 'flex'}}>
            <Filter 
                handleChangeCheckbox={handleChangeCheckbox}
                //    applyFilters={applyFilters}
                clearFilter={clearFilter}
                isOptionSelected={isOptionSelected}
                disableClearFilterButton={disableClearFilterButton} 
            />
            <Dashboard data={ALL_SHOES} />
        </div>
    </div>
  );
}

export default Homepage;
