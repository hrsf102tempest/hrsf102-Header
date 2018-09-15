import React from 'react';
import {shallow, mount} from 'enzyme';

import DollarSignsAndCategories from '../client/src/components/DollarSignsAndCategories';

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

describe("DollarSignsAndCategories Component Testing", () => {
    
  test ("Dollar Signs to render props correctly", () => {
    let randomNumberOfDollarSigns = getRandomInt(4) + 1
    const wrapper = shallow(<DollarSignsAndCategories dollarSigns={randomNumberOfDollarSigns}/>)
    const text = wrapper.find('DollarSigns').children().text();
    expect(text).toBe('$'.repeat(randomNumberOfDollarSigns));
  });

  test ("Categories to render proper amount of items", () => {
    let randomNumberOfItems = getRandomInt(3)
    let testArray = [] 
    for (let i = 0; i < randomNumberOfItems; i++){
      testArray.push(`test${i}`)
    }
    const wrapper = shallow(<DollarSignsAndCategories categories={testArray}/>)
    const text = wrapper.find('Categories').children().length;
    expect(text).toBe(testArray.length)
  });

  test ("Categories to render tooltip", () => {
    const wrapper = shallow(<DollarSignsAndCategories />)
    const text = wrapper.find('ToolTip').children().text();
    expect(text).toBe("Edit Categories")
  });

})