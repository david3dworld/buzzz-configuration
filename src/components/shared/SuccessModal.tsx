import React from 'react';
import { Modal } from 'react-bootstrap';

import { Button } from '../form control';

interface IProps {
  show: boolean;
  onHide: any;
}

const SuccessModal = (props: IProps) => {
  const { show, onHide } = props;

  return (
    <div className="buzzz-success-modal">
      <Modal
        className="buzzz-success-modal"
        show={show}
        onHide={onHide}
        size="lg"
        backdrop="static"
        centered
      >
        <Modal.Body>
          <img src="/svg/tick-circle.svg" alt="tick-circle" />
          <h1>Thanks for your order</h1>
          <p>
            Woohoo! Your payment was successful, and your order is complete. A receipt and download
            instructions are on their way to your inbox.
          </p>
          <div className="modal-btn">
            <Button onClick={onHide} title="Go back home" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SuccessModal;
