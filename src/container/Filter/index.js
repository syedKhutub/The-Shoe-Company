import React from 'react';
import CustomCheckbox from '../../components/Checkbox';
import clsx from 'clsx';
import { FILTERLIST } from './constants';
import Button from '../../components/Button';
import Slider from '@material-ui/core/Slider'
import './css/index.css';

const Filter = ({
  handleChangeCheckbox,
  clearFilter,
  isOptionSelected,
  disableClearFilterButton,
  sliderValue,
  onChangeRangeSelector,
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
            <div className={'filterLabel'}>Price Range (in $)</div>
              <Slider value={sliderValue} min={500} max={10000} valueLabelDisplay={'auto'} onChange={onChangeRangeSelector}/>
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
