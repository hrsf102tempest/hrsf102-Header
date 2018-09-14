import React from 'react';
import {shallow} from 'enzyme';

import DollarSignsAndCategories from '../client/src/components/DollarSignsAndCategories.jsx';

describe("React Component Testing", () => {
  describe ('Header testing thing', () => {
    test ("first test", () => {
      const wrapper = shallow(<DollarSignsAndCategories />)
      expect(wrapper).toBeDefined()
    })
  })
})