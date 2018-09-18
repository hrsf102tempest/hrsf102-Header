import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const ModalContent = styled.div`
  width: 382px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -5%);
  background-color: white;
  padding: 24px;
  border-radius: 5px;
  border-color: rgb(153, 153, 153);
  z-index: 3000;
`;

ModalContent.displayName = 'ModalContent';

const ModalTopHeader = styled.div`
  padding: 0px 48px 0px 0px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 12px;
`;

const ModalTitle = styled.h2`
  text-align: left;
  font-weight: bold;
  font-size: 21px;
  color: #d32323;
  margin: 0px 0px 12px 0px;
`;

const ModalClose = styled.span`
  position: absolute;
  right: 28px;
  color: #666;
  &:hover {
    color: #bcbcbc;
    cursor: pointer;
  }
`;
ModalClose.displayName = 'ModalClose';

const CategoriesInputLabel = styled.label`
  color: black;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 3px;
  font-size: 14px;
  margin-bottom: 6px;
`;

const SubTitle = styled.p`
  display: block;
  color: #999999;
  font-size: 0.75rem;
  font-weight: normal;
  margin-top: 0px;
`;

const ShareModalButton = styled.div`
  border-color: #8d0005;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 0px;
  border-style: solid 1px;
  display: inline;
  padding: 8px;
  background-colors: #df1201;
  background: linear-gradient(#d90007, #c91400);
  color: white;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background: #ff1a1a;
  }
`;

const SingleCategory = styled.div`
  margin: 6px 0;
  vertical-align: baseline;
  font-size: 13px;
  font-weight: 400;
`;
const CategoriesContainer = styled.div`
  margin-bottom: 30px;
`;

const Link = styled.span`
  color: #0073bb;
  text-decoration: none;
  margin-left: 12px;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const AngleIcon = styled.i`
  padding: 0 5px;
`;

const EditModal = props => {
  console.log('props from edit modal', props);

  const { categories, toggleModal, removeCategory } = props;

  let editCategoriesToRender = [];

  console.log('prop cateogries', categories);
  if (categories) {
    editCategoriesToRender = categories.map((category, index) => (
      <SingleCategory>
        {category.parentCategory}
        <AngleIcon className="fas fa-angle-right" />
        {category.childCategory}
        <Link onClick={category => removeCategory(category)}>Remove</Link>
      </SingleCategory>
    ));
  }

  return (
    <ModalContent>
      <ModalTopHeader>
        <ModalClose onClick={() => toggleModal(null)}>
          <i className="fas fa-times" />
        </ModalClose>
        <ModalTitle>Add or remove categories</ModalTitle>
      </ModalTopHeader>
      <CategoriesInputLabel>Select up to 3 categories</CategoriesInputLabel>
      <SubTitle>The more specific the better.</SubTitle>
      <CategoriesContainer>{editCategoriesToRender}</CategoriesContainer>
      <ShareModalButton>Submit</ShareModalButton>
      <Link onClick={() => toggleModal(null)}>Cancel</Link>
    </ModalContent>
  );
};

EditModal.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired
};

export default EditModal;
