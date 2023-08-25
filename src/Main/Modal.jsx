import React from 'react';
import Modal from 'react-modal';
import './modal.css'; // Import your custom CSS styles

const SuccessModal = ({ isOpen, onClose, isLoading }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Success Modal"
      ariaHideApp={false} // Disable the warning about app element
      className="custom-modal" // Apply a custom class for additional styling
      overlayClassName="custom-overlay" // Apply a custom class for overlay styling
    >
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <h2>Success!</h2>
          <p>Your form was submitted successfully.</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </Modal>
  );
};

export default SuccessModal;
