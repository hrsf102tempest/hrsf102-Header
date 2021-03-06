import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import ActionButtons from './actionButtons';

const StarWrapper = styled.div`
  margin-top: 9px;
  margin-bottom: 9px;
  line-height: 24px;
  display: blocK;
`;

const ReviewsSection = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #666666;
  vertical-align: baseline;
  position: relative;
`;

const Rating = styled.div`
  float: left;
  line-height: 24px;
  margin-bottom: 0;
  margin-right: 6px;
  width: 132px;
  height: 24px;
  background-image: url('http://127.0.0.1:3004/biz/stars.png');
  // Yelp renders their stars by showing a certain part of stars.png based on the rating.
  // I created this formula by messing around with different yelp ratings I found for businesses
  background-position: 0 ${props => `${-216 - 2 * (5 - props.averageScore) * -24}px`};
  position: relative;
`;
Rating.displayName = 'Rating';

const DetailButton = styled.button`
  border-radius: 3px;
  border-width: 1px;
  padding: 3px 5px;
  margin-left: 10px;
  border-style: solid;
  border-color: #ccc;
  color: #a3a3a3;
  background-color: #f5f5f5;
  font-size: 0.7rem;
`;
const Chart = styled.i`
  padding-right: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #a3a3a3;
  position: relative;
  &:hover #ToolTipNext {
    visibility: visible;
  }
  &:hover {
    color: black;
  }
`;
const NumberOfReviews = styled.span``;
NumberOfReviews.displayName = 'NumberOfReviews';

const ToolTipNext = styled.span`
  visibility: hidden;
  width: 100px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  opacity: 0.9;

  position: absolute;
  z-index: 1;
  top: -35px;
  left: 25px;
  margin-left: -50px;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;
const StarsAndReviews = props => {

  const {numberOfReviews, toggleModal} = props
  // this section allows us to find the average score given the score for each month.
  // take the score per month and divide it by the number of months coutned
  let averageScore = 0;
  let monthsCounter = 0;
  for (const year in props.reviews) {
    for (const month in props.reviews[year]) {
      averageScore += props.reviews[year][month];
      monthsCounter++;
    }
  }

  // after finding the average score, we have to to round the number to the nearest .5 (because thats how yelp displays their ratings)
  // to do this, double the average score, round it to the nearest int, then divide the result by 2.
  averageScore = Math.round((averageScore / monthsCounter) * 2) / 2;

  return (
    <StarWrapper>
      <Rating averageScore={averageScore} id="rating" />
      <ReviewsSection>
        <NumberOfReviews id="numberofreviews">
          {numberOfReviews} reviews
        </NumberOfReviews>
        <DetailButton>
          <Link href="#">
            <Chart className="fas fa-chart-bar" />
            Details
            <ToolTipNext id="ToolTipNext">
              Rating Detail
            </ToolTipNext>
          </Link>
        </ DetailButton>
        <ActionButtons toggleModal={toggleModal} />
      </ReviewsSection>
    </StarWrapper>
  );
};

StarsAndReviews.propTypes = {
  numberOfReviews: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default StarsAndReviews;

