import styled from "styled-components";

import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <ModalWrapper $isOpen={isOpen} onClick={closeModal}>
      {isOpen && (
        <ModalContent

          onClick={e => {
            e.stopPropagation();
          }}
        >
          <CloseButton onClick={closeModal}>
            <IoClose size="1.2rem" />
          </CloseButton>
          {children}
        </ModalContent>
      )}
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  display: ${props => (props.$isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ModalContent = styled.div`
  position: absolute;
  background-color: #fdfddc;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 2%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
