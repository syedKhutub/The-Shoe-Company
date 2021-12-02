import React from 'react';
import CustomCheckbox from '../../components/Checkbox';
import clsx from 'clsx';
import { FILTERLIST } from './constants';
import Button from '../../components/Button';
import MultiRangeSlider from '../../components/RangeSlider';
import './css/index.css';

const Filter = ({
  handleChangeCheckbox,
  applyFilters,
  clearFilter,
  isOptionSelected,
  disableClearFilterButton,
}) => {

  const renderCheckbboxList = (filter_name, filter_options) => {
    return (
      <>
        {filter_options.map((option) => {
          return (
            <div>
              <div className='optionsContainer'>
                <CustomCheckbox
                  onChange={() => {
                    handleChangeCheckbox(filter_name, option.value);
                  }}
                  className='checkbox'
                  checked={isOptionSelected(filter_name, option.value)}
                  name={option.label}
                />
                <div className='option'>{option.label}</div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className='filterContainer'>
      <div className='buttonContainer'>
        <Button
          className={clsx('button', 'apply')}
          onClick={() => applyFilters()}
        >
          Apply Filter
        </Button>
        <Button
          className={clsx('button', 
          {
              'disabledButton' : disableClearFilterButton(),
              'clear': !disableClearFilterButton()
          })}
          onClick={() => clearFilter()}
          disabled={disableClearFilterButton()}
        >
          Clear Filter
        </Button>
      </div>
      
      <hr className='hr' />
      <div className={'filterListContainer'}>
            <div className={'filterLabel'}>Price Range</div>
            <MultiRangeSlider min='10' max='100'  onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
            </div>
        <hr className='hr' />
      {FILTERLIST.map((filter) => {
        return (
          <>
            <div className={'filterListContainer'}>
              <div className={'filterLabel'}>{filter.filterLabel}</div>
              {renderCheckbboxList(filter.filter_name, filter.options)}
            </div>
            <hr className='hr'/>
          </>
        );
      })}
    </div>
  );
};

export default Filter;
