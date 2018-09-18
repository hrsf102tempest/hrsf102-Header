import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const ModalContent = styled.div`
  width: 465px;
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

const ShareButtonContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const ShareButtonFacebook = styled.div`
  text-align: center;
  background-color: #3b5998;
  color: white;
  margin-right: 5px;
  width: 50%;
  height: 100%;
  border-radius: 5px;
  vertical-align: middle;
  padding: 5px 0px;
  border-color: #263961;
  border: 1px solid;
  font-weight: bold;
  font-size: 0.9rem;
  &:hover {
    background-color: #4669b5;
  }
`;

const FacebookShareIcon = styled.i`
  margin-right: 15px;
`;

const ShareButtonTwitter = styled.div`
  text-align: center;
  background-color: #50abf1;
  color: white;
  margin-right: 5px;
  width: 50%;
  height: 100%;
  border-radius: 5px;
  vertical-align: middle;
  padding: 5px 0px;
  border-color: #263961;
  border: 1px solid;
  font-weight: bold;
  font-size: 0.9rem;
  &:hover {
    background-color: #6dc0ff;
  }
`;

const PesudoInput = styled.div`
  border: solid 1px;
  height: 35px;
  text-align: left;
  padding-left: 10px;
  display: flex;
  border-color: rgb(153, 153, 153);
  border-radius: 5px;
`;

const ShareButton = styled.i`
  color: #a3a3a3;
  display: block;
  position: relative;
  text-align: center;
  top: 10px;
  margin-right: 15px;
`;

const CopyPasteShare = styled.input`
  color: #666;
  display: inline;
  border: none;
  width: 100%;
`;

const OrFieldSet = styled.fieldset`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid transparent;
  text-align: center;
  margin: 15px 0 0 0;
  border-right: none;
  border-left: none;
`;

const OrLegend = styled.legend`
  font-size: 1em;
  padding: 0 15px;
  color: #666;
  font-weight: bold;
`;

const SignUpForm = styled.form`
  text-align: left;
`;

const SignUpLabel = styled.label`
  color: black;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 3px;
  font-size: 14px;
`;

const SignUpInput = styled.input`
  height: 27px;
  width: 100%;
  margin-bottom: 13px;
  display: inline;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
`;

const AddANoteInput = styled.input`
  height: 100px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 30px;
  display: inline;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
`;

const SubTitle = styled.p`
  display: inline;
  color: #999999;
  font-size: 0.75rem;
  font-weight: normal;
  padding-left: 5px;
`;

const ShareModalButton = styled.div`
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
  }
`;

const ShareModal = props => {
  const { toggleModal } = props
  return (
    <ModalContent>
      <ModalTopHeader>
        <ModalClose onClick={() => toggleModal(null)}><i className="fas fa-times" /></ModalClose>
        <ModalTitle>Share business</ModalTitle>
      </ModalTopHeader>
      <ShareButtonContainer>
        <ShareButtonFacebook>
          <FacebookShareIcon className="fab fa-facebook-f" />
          Share on Facebook
        </ShareButtonFacebook>
        <ShareButtonTwitter>
          <FacebookShareIcon className="fab fa-twitter" />
          Share on Twitter
        </ShareButtonTwitter>
      </ShareButtonContainer>
      <PesudoInput>
        <ShareButton className="fas fa-share-square" />
        <CopyPasteShare type="text" defaultValue={window.location} />
      </PesudoInput>
      <OrFieldSet>
        <OrLegend>OR</OrLegend>
      </OrFieldSet>
      <SignUpForm>
        <SignUpLabel>Your Name</SignUpLabel>
        <SignUpInput type="text" />
        <SignUpLabel>Your Email</SignUpLabel>
        <SignUpInput type="text" />
        <SignUpLabel>To 
          <SubTitle>Email address</SubTitle>
        </SignUpLabel>
        <SignUpInput type="text" />
        <SignUpLabel>
          Add a Note 
          <SubTitle>Optional</SubTitle>
        </SignUpLabel>
        <AddANoteInput type="text" />
        <ShareModalButton>Share</ShareModalButton>
      </SignUpForm>
    </ModalContent>
)
};

ShareModal.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default ShareModal;
