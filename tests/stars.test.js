import React from 'react';
import {shallow, mount} from 'enzyme';

import StarsAndReview from '../client/src/components/stars';

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

describe("StarsAndReview Component Testing", () => {
    
  test ("StarsAndReview should properly render the number of reviews passed to its props", () => {
    let randomNumberOfReviews =  getRandomInt(500) + 1
    
    const wrapper = shallow(<StarsAndReview numberOfReviews={randomNumberOfReviews} />)
    const text = wrapper.find('NumberOfReviews').childAt(0).text();
    expect(text).toBe(String(randomNumberOfReviews));
    const text2 = wrapper.find('NumberOfReviews').childAt(1).text();
    expect(text2).toBe(" reviews");
  });

  test ("StarsAndReview should the average score", () => {
    let randomReviewRatings = {
      2018: {
        "01": (getRandomInt(10) + 1) / 2,
        "02": (getRandomInt(10) + 1) / 2,
        "03": (getRandomInt(10) + 1) / 2,
        "04": (getRandomInt(10) + 1) / 2,
        "05": (getRandomInt(10) + 1) / 2,
        "06": (getRandomInt(10) + 1) / 2,
        "07": (getRandomInt(10) + 1) / 2,
        "08": (getRandomInt(10) + 1) / 2,
        "09": (getRandomInt(10) + 1) / 2
      },
      2017: {
        "10": (getRandomInt(10) + 1) / 2,
        "11": (getRandomInt(10) + 1) / 2,
        "12": (getRandomInt(10) + 1) / 2,
        "01": (getRandomInt(10) + 1) / 2,
        "02": (getRandomInt(10) + 1) / 2,
        "03": (getRandomInt(10) + 1) / 2,
        "04": (getRandomInt(10) + 1) / 2,
        "05": (getRandomInt(10) + 1) / 2,
        "06": (getRandomInt(10) + 1) / 2,
        "07": (getRandomInt(10) + 1) / 2,
        "08": (getRandomInt(10) + 1) / 2,
        "09": (getRandomInt(10) + 1) / 2
      },
      2016: {
        "10": (getRandomInt(10) + 1) / 2,
        "11": (getRandomInt(10) + 1) / 2,
        "12": (getRandomInt(10) + 1) / 2,
        "01": (getRandomInt(10) + 1) / 2,
        "02": (getRandomInt(10) + 1) / 2,
        "03": (getRandomInt(10) + 1) / 2,
        "04": (getRandomInt(10) + 1) / 2,
        "05": (getRandomInt(10) + 1) / 2,
        "06": (getRandomInt(10) + 1) / 2,
        "07": (getRandomInt(10) + 1) / 2,
        "08": (getRandomInt(10) + 1) / 2,
        "09": (getRandomInt(10) + 1) / 2
      },
    }
    
    let averageScore = 0;
    let monthsCounter = 0;
    for (let year in randomReviewRatings){
      for (let month in randomReviewRatings[year]){
        averageScore += randomReviewRatings[year][month];
        monthsCounter ++;
      }
    }
    averageScore = (Math.round((averageScore / monthsCounter) * 2) / 2);

    const wrapper = mount(<StarsAndReview reviews={randomReviewRatings} />)
    const averagePassedIn = wrapper.find('Rating').prop('averageScore');
    expect(averagePassedIn).toBe(averageScore);
  });
})