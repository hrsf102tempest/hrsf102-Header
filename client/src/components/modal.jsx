import styled, { css } from 'styled-components';

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: ${props => props.isModal ? "visible" : "hidden"};
`

const ModalContent = styled.div`
  width: 465px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 12px;
  border-radius: 5px;
  border-color: rgb(153, 153, 153);
`

export {
  Modal,
  ModalContent
}