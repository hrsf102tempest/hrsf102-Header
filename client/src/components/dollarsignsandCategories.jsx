import styled, { css } from 'styled-components';
import React from 'react'

const Dollars = styled.div`
  line-height: 21px;
`

const DollarsDot = styled.i`
  font-size: 0.25rem;
  display: inline;
  color: #666666;
  top: -10px;
  margin: 1px;
  padding-left: 3px;
  vertical-align: middle;
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
      categories.push(<a key={i} href="#">{propCategories[i].childCategory}</a>)
    }
    console.log(categories);
    // categories = categories.join(", ")
  }
  
  return (
    <Dollars>
      {dollarSigns}<DollarsDot className="fas fa-circle fa-xs"></DollarsDot> {categories}
    </Dollars>
  )
}

export default DollarSignsAndCategories;