import styled, { css } from 'styled-components';
import React from 'react'

const StarWrapper = styled.div`
  margin-top: 9px;
  margin-bottom: 9px;
  line-height: 24px;
  display: blocK;
`
const NumberOfReviews = styled.div`
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  color: #666666;
  vertical-align: baseline;
  position: relative;
`

const Rating = styled.div`
  float: left;
  line-height: 24px;
  margin-bottom: 0;
  margin-right: 6px;
  width: 132px;
  height: 24px;
  background-image: url("stars.png");
  background-position: 0 -168px;
  position: relative;
`


const StarsAndReviews = (props) => {

  console.log("props from the stars side", props)

  return (
    <StarWrapper>
      <Rating height="303" width="84" /> 
      <NumberOfReviews> {props.numberOfReviews} reviews</NumberOfReviews>
    </StarWrapper>
  )
}

export default StarsAndReviews;