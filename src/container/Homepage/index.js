import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';
import Filter from '../Filter';
import './css/index.css';
import { ALL_SHOES } from '../Dashboard/constants';

function Homepage() {
    const [selectedFilter, setSelectedFilter] = useState({
        categories: [],
        size: []
    });
    const [sliderValue, setSliderValue] =  useState([500,10000]);
    const [dataToRender, setDataToRender] = useState(ALL_SHOES);
    const clearFilter = () => {
        setSelectedFilter({
            categories: [],
            size: []
        });
    };
    useEffect(() => {
        filterOnPrice(sliderValue[0], sliderValue[1])
    }, [sliderValue])
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
    const filterOnPrice = (minimumPrice, maximumPrice) => {
        let shoesFilteredOnPrice = ALL_SHOES.filter((shoe) => {
            return shoe.price >= minimumPrice && shoe.price <= maximumPrice
        })
        setDataToRender(shoesFilteredOnPrice);
    }
    const onChangeRangeSelector = (e, newSlidervalue) => {
        setSliderValue(newSlidervalue)
    }
  return (
    <div className="App">
        <div style={{ display: 'flex'}}>
            <Filter 
                handleChangeCheckbox={handleChangeCheckbox}
                //    applyFilters={applyFilters}
                clearFilter={clearFilter}
                isOptionSelected={isOptionSelected}
                disableClearFilterButton={disableClearFilterButton}
                sliderValue={sliderValue}
                onChangeRangeSelector={onChangeRangeSelector}
            />
            <Dashboard data={dataToRender} />
        </div>
    </div>
  );
}

export default Homepage;
