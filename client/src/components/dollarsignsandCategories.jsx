import styled, { css } from 'styled-components';
import React from 'react'

const Dollars = styled.div`
  color: #666;
`

const DollarsDot = styled.i`
  font-size: 0.05rem;
  display: inline;
  color: #666666;
  top: -10px;
  padding: 0px 8px;
  vertical-align: middle;
`

const CategoryLink = styled.a`
  color: #0073BB;
  text-decoration: none;
`
const EditButton = styled.button`
  border-radius: 3px;
  border-width: 1px;
  padding: 3px 5px;
  margin-left: 10px;
  border-style: solid;
  border-color: #ccc;
  color: #A3A3A3;
  background-color: #F5F5F5;
  font-size: .7rem;
`
const Link = styled.a`
  text-decoration: none;
  color: #A3A3A3;
  &:hover #ToolTip{
    visibility: visible;
  }
  &:hover{
    color: black;
  }
`
const ToolTip = styled.span`
  visibility: hidden;
  width: 90px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  opacity: 0.75;

  position: absolute;
  z-index: 1;
  left: 43%;
  top: 20%;
  margin-left: -45px;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
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
  }
  
  return (
    <Dollars>
      {dollarSigns}<DollarsDot className="fas fa-circle fa-xs"></DollarsDot>{categories.map((category) => category)}<EditButton><Link href="#"><i className="fas fa-pencil-alt"></i> Edit<ToolTip id="ToolTip">Edit Categories</ToolTip></Link></EditButton>
    </Dollars>
  )
}

export default DollarSignsAndCategories;