import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';
import { useSelector, useDispatch } from 'react-redux';

const animatedComponents = makeAnimated();

export default function MultiSelect({dataOptions, isMulti= true , closeMenuOnSelect = false , sliceName , defaultValue = []}) {
    const dispatch = useDispatch();
  return (
    <Select
      defaultValue={defaultValue}
      closeMenuOnSelect={closeMenuOnSelect}
      components={animatedComponents}
    //   defaultValue={[colourOptions[4], colourOptions[5]]}    
      onChange={(e) => dispatch({ type: `news/${sliceName}`, payload: e })}
      isMulti = {isMulti}
      options={dataOptions}
    />
  );
}