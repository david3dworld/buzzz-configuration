import React from 'react';
import { Modal } from 'react-bootstrap';

import { Button } from '../form control';

interface IProps {
  show: boolean;
  onHide: any;
  clickYes: Function;
  title: any;
  loading: boolean;
}

const DeleteModal = (props: IProps) => {
  const { show, onHide, clickYes, title, loading } = props;

  return (
    <div className="buzzz-remove-modal">
      <Modal
        className="buzzz-remove-modal"
        show={show}
        onHide={onHide}
        size="lg"
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <img src="/svg/danger.svg" alt="tick-circle" />
          <h1>Warning!</h1>
          <p className="buzzz-remove-modal-text">Do you want to remove item from cart?</p>
          <div className="modal-btn">
            <Button onClick={onHide} title="No" />
            <Button onClick={clickYes} title={title} className="delete" loading={loading} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteModal;
