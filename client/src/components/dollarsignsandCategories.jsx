import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Dollars = styled.div`
  color: #666;
`;

const DollarsDot = styled.i`
  font-size: 0.05rem;
  display: inline;
  color: #666666;
  top: -10px;
  padding: 0px 8px;
  vertical-align: middle;
`;

const CategoryLink = styled.a`
  color: #0073bb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
CategoryLink.displayName = 'CateogryLink';

const EditButton = styled.button`
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
const EditLink = styled.a`
  text-decoration: none;
  color: #a3a3a3;
  position: relative;
  &:hover #ToolTip {
    visibility: visible;
  }
  &:hover {
    color: black;
  }
`;
const EditIcon = styled.i`
  padding-right: 2px;
`;

const ToolTip = styled.span`
  visibility: hidden;
  width: 90px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  opacity: 0.9;

  position: absolute;
  z-index: 1;
  top: -35px;
  left: -25px;
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
ToolTip.displayName = 'ToolTip';

const DollarSigns = styled.span``;

DollarSigns.displayName = 'DollarSigns';

const Categories = styled.span``;

Categories.displayName = 'Categories';

const DollarSignsAndCategories = props => {
  const { categories } = props;
  let dollarSigns = '';
  for (let i = 0; i < props.dollarSigns; i++) {
    dollarSigns += '$';
  }

  console.log('category props', categories);
  const propCategories = categories;
  const categoriesToRender = [];
  if (propCategories !== undefined) {
    for (let i = 0; i < categories.length; i++) {
      if (i === categories.length - 1) {
        categoriesToRender.push(
          <CategoryLink key={i} href="#">
            {categories[i].childCategory}
          </CategoryLink>
        );
      } else {
        categoriesToRender.push(
          <CategoryLink key={i} href="#">
            {categories[i].childCategory}, {' '}
          </CategoryLink>
        );
      }
    }
  }

  return (
    <Dollars>
      <DollarSigns id="dollarsigns">{dollarSigns}</DollarSigns>
      <DollarsDot className="fas fa-circle fa-xs" />
      <Categories id="categories">{categoriesToRender.map(category => category)}</Categories>
      <EditButton onClick={() => props.toggleModal('edit')}>
        <EditLink href="#">
          <EditIcon className="fas fa-pencil-alt" /> 
          Edit
          <ToolTip id="ToolTip">Edit Categories</ToolTip>
        </EditLink>
      </EditButton>
    </Dollars>
  );
};

DollarSignsAndCategories.propTypes = {
  dollarSigns: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default DollarSignsAndCategories;
