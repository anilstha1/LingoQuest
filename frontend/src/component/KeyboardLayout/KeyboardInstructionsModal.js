import React from 'react';

const KeyboardInstructionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="keyboard-instructions-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h3>Activate Nepali Keyboard Layout</h3>
        <p>
          To type in Nepali, you need to activate the Nepali keyboard layout on
          your operating system. Follow the instructions below for your OS:
        </p>
        <ul>
          <li>For Windows: [Instructions for Windows]</li>
          <li>For macOS: [Instructions for macOS]</li>
          <li>For Linux: [Instructions for Linux]</li>
        </ul>
      </div>
    </div>
  );
};

export default KeyboardInstructionsModal;
