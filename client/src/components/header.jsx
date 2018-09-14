import styled, { css } from 'styled-components';
import React, {Component} from 'react'
import DollarSignsAndCategories from './dollarsignsandCategories.jsx';
import StarsAndReviews from './stars.jsx'
import { WSASERVICE_NOT_FOUND } from 'constants';

const Title = styled.h1`
  font-size: 30px;
  color: #333;
  margin: 0;
`;

const BizWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  font-weight: 700:
`

const ClaimedCheck = styled.i`
  color: #0073BB;
  font-size: 1.10rem;
  padding-right: 5px;
`
const ClaimedText = styled.div`
  font-size: 14px;
  display: inline-block;  
  font-weight: 400;
`

class Header extends React.Component {
  constructor(props){
    super (props)

    this.state = {
      businessData: {}
    }
  }

  componentDidMount(){
    // function that gets all search params
    let parseQueryString = () => {
      let str = window.location.search;
      let objURL = {};
      str.replace(
          new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
          ( $0, $1, $2, $3 ) => {
              objURL[ $1 ] = $3;
          }
      );
      return objURL;
    };
    let params = parseQueryString();
    let idParam = params.id;
    $.ajax({
      url: `http://127.0.0.1:3004/business/${idParam}`,
      success: (data) => {
        let businessData = JSON.parse(data);
        console.log("Data for this business", businessData);
        this.setState({businessData: businessData})
      }
    })
  }

  render() {
    return (
      <BizWrapper>
        <Title>
          <span id="title">
            {this.state.businessData.name}
          </span>
            {this.state.businessData.claimed === true &&
              <ClaimedText> 
              <ClaimedCheck className="fas fa-check-circle" /> 
                Claimed
              </ ClaimedText> 
            }
        </Title>
        <StarsAndReviews reviews={this.state.businessData.reviews} numberOfReviews={this.state.businessData.totalReviews}/>
        <DollarSignsAndCategories dollarSigns={this.state.businessData.dollarSigns} categories={this.state.businessData.categories}/> 
      </ BizWrapper>
    )
  }
}

export default Header;