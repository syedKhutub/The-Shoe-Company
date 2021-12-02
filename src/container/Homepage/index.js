import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';
import Filter from '../Filter';
import './css/index.css';
import { ALL_SHOES } from '../Dashboard/constants';
import ErrorPage from '../NotFound';

const Homepage = () => {
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
        setSliderValue([500,10000])
        setDataToRender(ALL_SHOES)
    };
    useEffect(() => {
        applyFilters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sliderValue, selectedFilter.categories, selectedFilter.size] );

    
    const disableClearFilterButton = () => {
        if (
            (selectedFilter.categories.length ||
            selectedFilter.size.length)  === 0
        ) {
            return true;
        }
        return false;
    };
    const applyFilters = () => {
        let shoesFiltered = ALL_SHOES.filter((shoe) => {
            return shoe.price >= sliderValue[0] && shoe.price <= sliderValue[1]
        })
        if(selectedFilter.categories.length > 0) {
            shoesFiltered = shoesFiltered.filter((shoe) => {
                let found = selectedFilter.categories.find(
                    (category) =>
                    category === shoe.category
                );
                return found !== undefined;
            });
        }
        if(selectedFilter.size.length > 0) {
            shoesFiltered = shoesFiltered.filter((shoe) => {
                if (shoe.size && shoe.size.length) {
                  let found = shoe.size.find((data) => {
                    let foundInSearchList = selectedFilter.size.find(
                      (shoeSize) =>{
                          return (
                              shoeSize === data
                          )
                      }
                    );
                    return foundInSearchList !== undefined;
                  });
                  return found !== undefined;
                }
                return false;
              });
        }
        setDataToRender(shoesFiltered)
    }

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
    const onChangeRangeSelector = (e, newSlidervalue) => {
        setSliderValue(newSlidervalue)
    }
  return (
    <div className="App">
        <div style={{ display: 'flex'}}>
            <Filter 
                handleChangeCheckbox={handleChangeCheckbox}
                clearFilter={clearFilter}
                isOptionSelected={isOptionSelected}
                disableClearFilterButton={disableClearFilterButton}
                sliderValue={sliderValue}
                onChangeRangeSelector={onChangeRangeSelector}
            />
            {
                dataToRender.length > 0 ? <Dashboard data={dataToRender} /> : <ErrorPage />
            }
            
        </div>
    </div>
  );
}

export default Homepage;
