import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const ActionButtonsDiv = styled.div`
  text-align: right;
  display: inline;
  float: right;
`;

ActionButtonsDiv.displayName = 'ActionButtonsDiv';

const WriteAReview = styled.div`
  border-color: #8d0005;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 0px;
  border-style: solid 1px;
  display: inline;
  padding: 8px;
  margin-right: 12px;
  background-color: #df1201;
  background: linear-gradient(#d90007, #c91400);
  color: white;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background: #ff1a1a;
    cursor: pointer;
  }
`;

WriteAReview.displayName = 'WriteAReview';

const Star = styled.i`
  padding-right: 5px;
`;

const SideButton = styled.button`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px;
  border-width: 1px;
  border-color: #ccc;
  padding: 8px;
  color: #666;
  background-color: #f7f7f7;
  font-weight: bold;
  font-size: 0.7rem;
  display: inline;
  &:hover {
    background: #fffff1;
    cursor: pointer;
  }
`;

const SideButtonPhoto = styled.button`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px;
  border-width: 1px;
  border-color: #ccc;
  border-right: none;
  padding: 8px;
  color: #666;
  background-color: #f7f7f7;
  font-weight: bold;
  font-size: 0.7rem;
  display: inline;
  &:hover {
    background: #fffff1;
    cursor: pointer;
  }
`;

const SideButtonShare = styled.button`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px;
  border-width: 1px;
  border-color: #ccc;
  border-right: none;
  padding: 8px;
  color: #666;
  background-color: #f7f7f7;
  font-weight: bold;
  font-size: 0.7rem;
  display: inline;
  &:hover {
    background: #fffff1;
    cursor: pointer;
  }
`;
SideButton.displayName = 'SideButton';

const WriteAReviewLink = styled.a`
  text-decoration: none;
  color: white;
`;

WriteAReviewLink.displayName = 'WriteAReviewLink';

const Link = styled.a`
  color: #666;
  text-decoration: none;
`;

const ActionButtonIcon = styled.i`
  padding-right: 5px;
`;

const ActionButtons = props => {
  const { toggleModal } = props;
  return (
    <ActionButtonsDiv>
      <WriteAReview>
        <Star className="fas fa-star" />
        <WriteAReviewLink href="#">Write A Review</WriteAReviewLink>
      </WriteAReview>
      <SideButtonPhoto className="sidebutton">
        <Link href="#">
          <ActionButtonIcon className="fas fa-camera" />Add Photo
        </Link>
      </SideButtonPhoto>
      <SideButtonShare className="sidebutton" id="ShareButton" onClick={() => toggleModal('share')}>
        <Link href="#">
          <ActionButtonIcon className="fas fa-share-square" />Share
        </Link>
      </SideButtonShare>
      <SideButton className="sidebutton" id="SaveButton" onClick={() => toggleModal('save')}>
        <Link href="#">
          <ActionButtonIcon className="fas fa-bookmark" />Save
        </Link>
      </SideButton>
    </ActionButtonsDiv>
  );
};

ActionButtons.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default ActionButtons;
