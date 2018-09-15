import styled, { css } from 'styled-components';
import React, {Component} from 'react';
// import {Modal} from './modalshared.jsx';

const ModalContent = styled.div`
  width: 450px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -5%);
  background-color: white;
  padding: 24px;
  border-radius: 5px;
  border-color: rgb(153, 153, 153);
  z-index: 3000;
`

const ModalTopHeader = styled.div`
  margin-bottom: 12px;
  text-align: center;
`
const ModalTitle = styled.h2`
  font-weight: bold;
  font-size: 21px;
  color: #D32323;
  margin: 0px 0px 6px 0px;
`
const ModalClose = styled.span`
  position: relative;
  left: 50%;
  color: #666; 
  &:hover{
    color: #BCBCBC;
    cursor: pointer;
  }
`
ModalClose.displayName = "ModalClose"

const ShareButtonContainer = styled.div`
  margin: 20px 0px;
`
const SignUpWithFacebook = styled.div`
  text-align: center;
  background-color: #3B5998;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  vertical-align: middle;
  padding: 5px 0px;
  border-color: #263961;
  border: 1px solid rgb(38, 57, 97);
  font-weight: bold;
  font-size: .9rem;
  margin-bottom: 10px;
  &:hover{
    cursor: pointer;
    background-color: #4669B5;
  }
`
  
const ShareIcon = styled.i`
  margin-right: 15px;
`

const SignUpWithGoogle = styled.div`
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  text-align: center;
  background-color: white;
  color: rgb(102,102,102);
  width: 100%;
  height: 100%;
  border-radius: 5px;
  vertical-align: middle;
  padding: 5px 0px;
  border-color: #263961;
  border: 1px solid rgb(217, 217, 217);
  font-weight: bold;
  font-size: .9rem;
  &:hover{
    cursor: pointer;
    background-color: #f5f5f5;;
}
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
  font-size: .85em;
  padding: 0 18px;
  color: #666;
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
  margin-right: 5px;
`

const SignUpInput = styled.input`
  height: 30px;
  width: 100%;
  margin-bottom: 13px;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
  padding: 5px;
  box-sizing: border-box;  
`
const ZipCodeInput = styled.input`
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
  padding: 5px;
  box-sizing: border-box;  
`

const FirstNameInput = styled.input`
  height: 18px;
  width: 50%;
  display: inline;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
  padding: 5px;
  margin-right: 10px;
`
const LastNameInput = styled.input`
  height: 18px;
  width: 50%;
  display: inline;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
  padding: 5px;
`

const SubTitle = styled.p`
  display: inline; 
  color: #999999; 
  font-size: .75rem;
  font-weight: normal;
  text-align: right;
`
const ShareModalButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  text-align: center; 
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 0px;
  border-style: solid 1px;
  padding: 8px;
  margin-right: 12px;
  margin-bottom: 12px;
  background-color: #DF1201;
  background: linear-gradient(#d90007, #c91400);
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: solid 1px;
  border-color: #8d0005;
  &:hover{
    cursor: pointer;
    background: #ff1a1a;
  }
`
const SubHeading = styled.p`
  color: black;
  font-weight: bold;
  margin-bottom: 6px;
`

const TOSandPrivacyStatement = styled.p`
  color: #333;
  margin-bottom: 6px;
  font-size: 12px;
  text-align: center;
`
const ModalBody = styled.div`
  margin: 10px 30px 20px;
`

const TOSandPrivacyLink = styled.a`
  color: #0073BB;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`
const NameContainer = styled.div`
  display: flex;
  margin-bottom: 6px;
`
const BirthdayContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`
const BirthdayMonthSelect = styled.select`
  margin-right: 5px;  
  width: 33.33%;
  height: 100%;
  display: inline;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
  padding: 5px;
`
const BirthdayDaySelect = styled.select`
  width: 33.33%;
  height: 100%;
  display: inline;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
  padding: 5px;
`
const BirthdayYearSelect = styled.select`
  margin-left: 5px;
  width: 33.33%;
  height: 100%;
  display: inline;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 3px;
  padding: 5px;
`

const OnYelp = styled.div`
  text-align: right;
`

const SaveModal = (props) => {
  
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Nov', 'Dec'];
  let renderMonths = [];
  for (let i = 0; i < months.length; i++){
    renderMonths.push(<option value={months[i]}>{months[i]}</option>)
  }

  let days = [];
  for (let i = 1; i < 32; i++){
    days.push(<option value={i}>{i}</option>)
  }

  let years = [];
  for (let i = 2018; i > 1900; i--){
    years.push(<option value={i}>{i}</option>)
  }

  return (
    <ModalContent>
      <ModalBody>
      <ModalTopHeader>
        <ModalClose onClick={() => props.toggleModal(null)}><i className="fas fa-times"></i></ModalClose>
        <ModalTitle>Sign Up for Yelp</ModalTitle>
        <SubHeading>Connect with great local businesses</SubHeading>
        <TOSandPrivacyStatement>By signing up, you agree to Yelp's <TOSandPrivacyLink href="#">Terms of Services</TOSandPrivacyLink> and <TOSandPrivacyLink href="#">Privacy Policy</TOSandPrivacyLink></TOSandPrivacyStatement>
      </ModalTopHeader>
        <ShareButtonContainer>
      <SignUpWithFacebook><ShareIcon className="fab fa-facebook-f"></ShareIcon>Sign Up with Facebook</SignUpWithFacebook>
      <SignUpWithGoogle><ShareIcon className="fab fa-google"></ShareIcon>Sign Up with Google</SignUpWithGoogle>
      </ ShareButtonContainer>
      <TOSandPrivacyStatement>Don't worry, we never post without your permission.</TOSandPrivacyStatement>
      <OrFieldSet>
        <OrLegend>OR</OrLegend>
      </OrFieldSet>
      <SignUpForm>
        <NameContainer>
          <FirstNameInput type="text" placeholder="First Name"></FirstNameInput>
          <LastNameInput type="text" placeholder="Last Name"></LastNameInput>
        </NameContainer>
        <SignUpInput type="text" placeholder="Email"></SignUpInput>
        <SignUpInput type="text" placeholder="Password"></SignUpInput>
        <ZipCodeInput type="text" placeholder="ZIP Code"></ZipCodeInput>
        <SignUpLabel>Birthday</SignUpLabel>
        <SubTitle>Optional</SubTitle>
        <BirthdayContainer>
          <BirthdayMonthSelect name="Month">
            <option selected disabled>Month</option>
            {renderMonths}
          </BirthdayMonthSelect>
          <BirthdayDaySelect name="Day">
            <option selected disabled>Day</option>
            {days}
          </BirthdayDaySelect>
          <BirthdayYearSelect name="Years">
            <option selected disabled>Years</option>
            {years}
          </BirthdayYearSelect>
        </BirthdayContainer>
        <ShareModalButton>Sign Up</ShareModalButton>
      </SignUpForm>
      <OnYelp>
        <SubTitle>Already on Yelp? <TOSandPrivacyLink>Login</TOSandPrivacyLink></SubTitle>
      </OnYelp>
      </ModalBody>
    </ModalContent>
  )
}

export default SaveModal;