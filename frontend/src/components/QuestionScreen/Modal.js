import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../ui/Button';
import { StartIcon } from '../../config/icons';
import congratsgif from './congrats.gif';
import learngif from './source.gif';
// Define keyframe animations
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const shine = keyframes`
  0% {
    color: #ffffff;
  }
  50% {
    color: #ffc107;
  }
  100% {
    color: #ffffff;
  }
`;

// Define styled components
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};
  transition: all 0.3s ease-in-out;
`;

const ModalContent = styled.div`
  display: flex; /* Display content in a row */
  background: white;
  padding: 20px;
    width: 60%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.3s ease-in-out;
  transform-origin: right center;
  text-align: center;
  overflow: hidden; /* Add this line to prevent overflow */
`;

const LeftSide = styled.div`
  flex: 1; /* Take up 50% of the modal width */
`;

const RightSide = styled.div`
  flex: 1; /* Take up 50% of the modal width */
`;

const GifImage = styled.img`
  max-width: 70%;
  height: auto;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ShiningText = styled.div`
  animation: ${shine} 2s linear infinite;
  font-size: 40px;
`;

const Modal = ({ show, onClose, children ,status}) => {
  const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     if (show) {
//       setTimeout(() => {
//         setVisible(false);
//         onClose();
//         setDescriptionModal(true);
//       }, 5000);
//     }
//   }, [show, onClose]);

  const closeModal = () => {
    setVisible(true);
    onClose();
  };

  return (
    <ModalWrapper show={show}>
      {visible && (
        <ModalContent>
          <LeftSide>
          {status && (<>
            <GifImage src={congratsgif} alt="Animated GIF" />
            <ShiningText>Ohh !!!!! That's Correct</ShiningText>
            </>
          )
          }
            {!status && (  <GifImage src={learngif} alt="Animated GIF" />)}
          </LeftSide>
          <RightSide>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', lineHeight: '1.5', color: '#333', textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, quam eu facilisis sollicitudin, quam purus condimentum dolor, ut dapibus justo libero non odio. Nullam vel arcu ut neque volutpat fringilla. Quisque in tellus id justo malesuada ultrices. Sed in ante vitae nisi hendrerit convallis.
        </div>
                    <CloseButton onClick={closeModal}>&times;</CloseButton>
            <Button
              text="RESUME"
              icon={<StartIcon />}
              iconPosition="left"
              onClick={onClose}
            />
            {children}
          </RightSide>
        </ModalContent>
      )}
    </ModalWrapper>
  );
};

export default Modal;
