import React from 'react';
import {shallow, mount} from 'enzyme';

import ActionButtons from '../client/src/components/actionButtons';

describe("ActionButton Component Testing", () => {
  
  describe("Tests Related to Action Buttons & Functions", () => {
    test ("Write A Review Link to render Write A Review", () => {
      const wrapper = shallow(<ActionButtons />);
      const text = wrapper.find("WriteAReviewLink").children().text()
      expect(text).toBe("Write A Review")
    })
    
    test ("There Should be Three Side Button components", () => {
      const wrapper = shallow(<ActionButtons />);
      const text = wrapper.find("SideButton").length
      expect(text).toBe(3)
    })
  
    test ("Share Button Should toggle modal state", () => {
      const wrapper = shallow(<ActionButtons />);
      expect(wrapper.instance().state.modalState).toEqual("");
      expect(wrapper.instance().state.isModal).toEqual(false);
      
      wrapper.find("#ShareButton").simulate('click');
      
      expect(wrapper.instance().state.modalState).toEqual("share");
      expect(wrapper.instance().state.isModal).toEqual(true);
    })
  
    test ("Save Button Should toggle modal state", () => {
      const wrapper = shallow(<ActionButtons />);
      expect(wrapper.instance().state.modalState).toEqual("");
      expect(wrapper.instance().state.isModal).toEqual(false);
      
      wrapper.find("#SaveButton").simulate('click');
      
      expect(wrapper.instance().state.modalState).toEqual("save");
      expect(wrapper.instance().state.isModal).toEqual(true);
    })
  })

  describe("Tests related to Modals on Action Components" , () => {
    test ("Toggle ModalState on Modal Component Click", () => {
      const wrapper = shallow(<ActionButtons />);
      wrapper.find("#ShareButton").simulate('click');
      wrapper.find("Modal").simulate('click');
      expect(wrapper.instance().state.isModal).toEqual(false);
      expect(wrapper.instance().state.modalState).toEqual(null);
    })

    // need to find the proper way to do this. 
     
    // test ("Toggle ModalState on Close Click", () => {
    //   const wrapper = shallow(<ActionButtons />);
    //   wrapper.find("#SaveButton").simulate('click');
    //   console.log(wrapper.debug());
    //   wrapper.find("ModalClose").simulate('click');
    // })
  })

  
})