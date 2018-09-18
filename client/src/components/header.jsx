import styled from 'styled-components';
import React from 'react';
import $ from 'jquery';
import DollarSignsAndCategories from './dollarsignsandCategories';
import StarsAndReviews from './stars';
import { Modal } from './modalshared';
import ShareModal from './sharemodal';
import SaveModal from './saveModal';
import EditModal from './editModal';

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
`;

const ClaimedCheck = styled.i`
  color: #0073bb;
  font-size: 1.1rem;
  padding: 0 5px 0 10px;
`;
const ClaimedText = styled.div`
  font-size: 14px;
  display: inline-block;
  font-weight: 400;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businessData: {},
      isModal: false, // should default to false
      modalState: null // should default to null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
  }

  componentDidMount() {
    // function that gets all search params
    const parseQueryString = () => {
      const str = window.location.search;
      const objURL = {};
      str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => {
        objURL[$1] = $3;
      });
      return objURL;
    };
    const params = parseQueryString();
    const idParam = params.id;
    $.ajax({
      url: `http://127.0.0.1:3004/business/${idParam}`,
      // url: `http://127.0.0.1:3004/business/15`,
      success: data => {
        const businessData = JSON.parse(data);
        console.log('Data for this business', businessData);
        this.setState({ businessData });
      }
    });
  }

  toggleModal(modalType) {
    this.setState({
      isModal: !this.newMethod(),
      modalState: modalType
    });
  }

  newMethod() {
    return this.state.isModal;
  }

  removeCategory(category) {
    console.log('category that was clicked', cateogry);
    // var categories = this.state.businessData.categories
    // for (let i = 0; i < categories.length; i++){
    //   if
    // }
  }

  render() {
    console.log('state from header', this.state);
    const { modalState, businessData, isModal } = this.state;
    let modalContentState;

    if (modalState === 'share') {
      modalContentState = <ShareModal toggleModal={this.toggleModal} />;
    } else if (modalState === 'save') {
      modalContentState = <SaveModal toggleModal={this.toggleModal} />;
    } else if (modalState === 'edit') {
      modalContentState = (
        <EditModal
          toggleModal={this.toggleModal}
          categories={businessData.categories}
          removeCategory={this.removeCategory}
        />
      );
    }
    return (
      <BizWrapper>
        <Modal onClick={() => this.toggleModal(null)} isModal={isModal} />
        {modalContentState}

        <Title>
          <span id="title">{businessData.name}</span>
          {businessData.claimed === true && (
            <ClaimedText>
              <ClaimedCheck className="fas fa-check-circle" />
              Claimed
            </ClaimedText>
          )}
          {/* {this.claimedText} */}
        </Title>
        <StarsAndReviews
          toggleModal={this.toggleModal}
          reviews={businessData.reviews}
          numberOfReviews={businessData.totalReviews}
        />
        <DollarSignsAndCategories
          toggleModal={this.toggleModal}
          dollarSigns={businessData.dollarSigns}
          categories={businessData.categories}
        />
      </BizWrapper>
    );
  }
}

export default Header;
