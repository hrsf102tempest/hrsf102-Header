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
  padding: 12px 54px 12px 12px;
  border-bottom: 1px solid #e6e6e6;
`
const ModalTitle = styled.h2`
  text-align: left;
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 21px;
  color: #D32323;
`
const ModalClose = styled.span`
  position: absolute;
  right: 18px;
`
const ShareButton = styled.div`
  background-color: #3B5998;
`
// const WriteAReview = styled.div`
//   border-radius: 3px;
//   box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 0px;
//   border-style: solid 1px;
//   display: inline;
//   padding: 8px;
//   margin-right: 12px;
//   background-color: #DF1201;
//   background: linear-gradient(#d90007, #c91400);
//   color: white;
//   font-size: 14px;
//   font-weight: bold;
//   &:hover{
//     background: #ff1a1a;
//   }
// `
class ActionButtons extends React.Component {
  constructor(props){
    super (props)
    
    this.state = {
      isModal: false,
      modalState: ""
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
      
      if(this.state.modalState === "share") {
        modalContentState = 
        <ModalContent>
          <ModalTopHeader>
            <ModalClose onClick={() => this.toggleModal(null)}><i className="fas fa-times"></i></ModalClose>
            <ModalTitle>Share business</ModalTitle>
          </ModalTopHeader>
          <ShareButton>Share on Facebook</ShareButton>
          <button>Share on Twitter</button>
        </ModalContent>
      } else if (this.state.modalState === "save"){
        modalContentState = <ModalContent>
          <div>save</div>
          <div onClick={() => this.toggleModal(null)}>Close</div>
        </ModalContent>
      }


      return (
        <ActionButtonsDiv>
          <Modal isModal={this.state.isModal}>
            {modalContentState}
          </Modal>

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