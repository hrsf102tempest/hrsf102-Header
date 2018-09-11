import styled, { css } from 'styled-components';
import React from 'react'

const Dollars = styled.div`
  line-height: 21px;
  color: #666;
`

const DollarsDot = styled.i`
  font-size: 0.1rem;
  display: inline;
  color: #666666;
  top: -10px;
  margin: 1px;
  padding-left: 3px;
  vertical-align: middle;
`

const CategoryLink = styled.a`
  color: #0073BB;
  text-decoration: none;
`

const DollarSignsAndCategories = (props) => {

  let dollarSigns = ""
  for (let i = 0; i < props.dollarSigns; i++){
    dollarSigns += "$"
  }

  console.log("category props", props.categories);
  let propCategories = props.categories
  let categories = []
  if (propCategories !== undefined){
    for (let i = 0; i < propCategories.length; i++){
      if (i === propCategories.length - 1){
        categories.push(<CategoryLink key={i} href="#">{propCategories[i].childCategory}</CategoryLink>)
      } else {
        categories.push(<CategoryLink key={i} href="#">{propCategories[i].childCategory}, </CategoryLink>)
      }
    }
    console.log(categories);
    // categories = categories.join(", ")
  }
  
  return (
    <Dollars>
      {dollarSigns}<DollarsDot className="fas fa-circle fa-xs"></DollarsDot> {categories.map((category) => category)}
    </Dollars>
  )
}

export default DollarSignsAndCategories;