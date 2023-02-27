import React from 'react';
import { Modal } from 'react-bootstrap';

import { Button } from '../form control';

interface IProps {
  show: boolean;
  onHide: any;
  clickNo: any;
  clickYes: any;
  loading: boolean;
}

const RemoveModal = (props: IProps) => {
  const { show, onHide, clickNo, clickYes, loading } = props;

  return (
    <div className="buzzz-remove-modal">
      <Modal
        className="buzzz-remove-modal"
        show={show}
        onHide={onHide}
        size="lg"
        // backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <img src="/svg/danger.svg" alt="tick-circle" />
          <h1>Warning!</h1>
          <p className="buzzz-remove-modal-text">Do you want to remove item from cart?</p>
          <div className="modal-btn">
            <Button onClick={clickNo} title="No" />
            <Button onClick={clickYes} title="Yes" className="delete" loading={loading} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RemoveModal;
