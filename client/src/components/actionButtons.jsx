import styled, { css } from 'styled-components';

const ActionButtonsDiv = styled.div`
  text-align: right;
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
    color: yellow;
  }
`
const Star = styled.i`

`

const SideButton = styled.a`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  padding: 8px;
  color: #666;
  background-color: #f7f7f7;
  font-weight: bold;
  font-size: .9rem;
`

const ActionButtons = (props) => {

  return (
    <ActionButtonsDiv>
      <WriteAReview><Star className="fas fa-star" /> Write A Review</WriteAReview>
      <SideButton><i className="fas fa-camera"></i>  Add Photo</SideButton>
      <SideButton><i class="fas fa-share-square"></i>  Share</SideButton>
      <SideButton><i class="fas fa-bookmark"></i>  Save</SideButton>
    </ActionButtonsDiv>
  )
}

export default ActionButtons;