import styled, { css } from 'styled-components';
import React, {Component} from 'react';
import {Modal, ModalContent} from './modal.jsx';

const ActionButtonsDiv = styled.div`
  text-align: right;
  display: inline;
  float: right;
`
const WriteAReview = styled.div`
  border-color: #8d0005;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 0px;
  border-style: solid 1px;
  display: inline;
  padding: 8px;
  margin-right: 12px;
  background-color: #DF1201;
  background: linear-gradient(#d90007, #c91400);
  color: white;
  font-size: 14px;
  font-weight: bold;
  &:hover{
    background: #ff1a1a;
  }
`
const Star = styled.i`

`
const SideButton = styled.button`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  padding: 8px;
  color: #666;
  background-color: #f7f7f7;
  font-weight: bold;
  font-size: .7rem;
  display: inline;
  &:hover{
    background: #fffff1;
  }
`
const WriteAReviewLink = styled.a`
  text-decoration: none;
  color: white;
`
const Link = styled.a`
  color: #666;
  text-decoration: none;
`
const ModalTopHeader = styled.div`
  padding: 0px 48px 0px 0px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 12px;
`
const ModalTitle = styled.h2`
  text-align: left;
  font-weight: bold;
  font-size: 21px;
  color: #D32323;
  margin: 0px 0px 12px 0px;
`
const ModalClose = styled.span`
  position: absolute;
  right: 28px;
  color: #666; 
`

const ShareButtonContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`
const ShareButtonFacebook = styled.div`
  text-align: center;
  background-color: #3B5998;
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
  font-size: .9rem; 
  &:hover{
    background-color: #4669B5;
  }
`
  
const FacebookShareIcon = styled.i`
  margin-right: 15px;
`

const ShareButtonTwitter = styled.div`
  text-align: center;
  background-color: #50ABF1;
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
  font-size: .9rem; 
  &:hover{
    background-color: #6DC0FF;
  }
  `
const PesudoInput = styled.div`
  border: solid 1px;
  height: 35px;
  text-align: left;
  padding-left: 10px;
  display: flex;
  border-color: rgb(153,153,153);
  border-radius: 5px;  
  `
const ShareButton = styled.i`
  color: #A3A3A3;
  display: block;
  position: relative;
  text-align: center;
  top: 10px;
  margin-right: 15px;
`
const CopyPasteShare = styled.input`
  color: #666;
  display: inline;
  border: none;
  width: 100%;
`
const OrFieldSet = styled.fieldset`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid transparent;
  text-align: center;
  margin: 15px 0 0 0;
  border-right: none; 
  border-left: none; 
  `
const OrLegend = styled.legend`
  font-size: 1em;
  padding: 0 15px;
  color: #666;
  font-weight: bold;
`

const SignUpForm = styled.form`
  text-align: left;
  `
const SignUpLabel = styled.label`
  color: black;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 3px;
  font-size: 14px;
`

const SignUpInput = styled.input`
  height: 27px;
  width: 100%;
  margin-bottom: 13px;
  display: inline;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
`
const AddANoteInput = styled.input`
  height: 100px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 30px;
  display: inline;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
`
const SubTitle = styled.p`
  display: inline; 
  color: #999999; 
  font-size: .75rem;
  font-weight: normal;
`
const ShareModalButton = styled.div`
  border-color: #8d0005;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 0px;
  border-style: solid 1px;
  display: inline;
  padding: 8px;
  margin-right: 12px;
  background-color: #DF1201;
  background: linear-gradient(#d90007, #c91400);
  color: white;
  font-size: 14px;
  font-weight: bold;
  &:hover{
    background: #ff1a1a;
  }
`



class ActionButtons extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      isModal: false, // should default to false
      modalState: "" // should default to "" 
    }
    this.toggleModal = this.toggleModal.bind(this);
    }

  toggleModal(modalType){
    this.setState({
      isModal: !this.state.isModal,
      modalState: modalType
    })
    console.log(this.state)
  }
    
    render(){
      // conditional rendering of modal content state
      let modalContentState
      
      if (this.state.modalState === "share") {
        modalContentState = 
        <ModalContent>
          <ModalTopHeader>
            <ModalClose onClick={() => this.toggleModal(null)}><i className="fas fa-times"></i></ModalClose>
            <ModalTitle>Share business</ModalTitle>
          </ModalTopHeader>
            <ShareButtonContainer>
          <ShareButtonFacebook><FacebookShareIcon className="fab fa-facebook-f"></FacebookShareIcon> Share on Facebook</ShareButtonFacebook>
          <ShareButtonTwitter><i className="fab fa-twitter"></i> Share on Twitter</ShareButtonTwitter>
          </ ShareButtonContainer>
          <PesudoInput>
            <ShareButton className="fas fa-share-square"></ShareButton>
            <CopyPasteShare type="text" defaultValue={window.location} />  
          </PesudoInput>
          <OrFieldSet>
            <OrLegend>OR</OrLegend>
          </OrFieldSet>
          <SignUpForm>
            <SignUpLabel>Your Name</SignUpLabel>
            <SignUpInput type="text"></SignUpInput>
            <SignUpLabel>Your Email</SignUpLabel>
            <SignUpInput type="text"></SignUpInput>
            <SignUpLabel>To <SubTitle>Email address</SubTitle></SignUpLabel>
            <SignUpInput type="text"></SignUpInput>
            <SignUpLabel>Add a Note <SubTitle>Optional</SubTitle></SignUpLabel>
            <AddANoteInput type="text"></AddANoteInput>
            <ShareModalButton>Share</ShareModalButton>
          </SignUpForm>
        </ModalContent>
      } else if (this.state.modalState === "save"){
        modalContentState = <ModalContent>
          <div>save</div>
          <div onClick={() => this.toggleModal(null)}>Close</div>
        </ModalContent>
      }


      return (
        <ActionButtonsDiv>
          <Modal onClick={() => this.toggleModal(null)} isModal={this.state.isModal}>
          </Modal>
            {modalContentState}

        <WriteAReview><Star className="fas fa-star" /><WriteAReviewLink href="#">Write A Review</ WriteAReviewLink></WriteAReview>
        <SideButton>
          <Link href="#">
          <i className="fas fa-camera"></i>  Add Photo
          </Link>
        </SideButton>

        <SideButton onClick={() => this.toggleModal("share")}>
          <Link href="#">
            <i className="fas fa-share-square"></i>  Share
          </Link>
        </SideButton>

        <SideButton onClick={() => this.toggleModal("save")}>
          <Link href="#">
          <i className="fas fa-bookmark"></i>  Save
          </Link>
        </SideButton>
    </ActionButtonsDiv>
    )
  }
}


export default ActionButtons;