import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { Button } from '../form control';

interface IProps {
  show: boolean;
  onHide: any;
  closeModal: any;
}

const GenderModal = (props: IProps) => {
  const { show, onHide, closeModal } = props;

  return (
    <div>
      <Modal
        className="buzzz-gender-modal"
        show={show}
        onHide={onHide}
        size="lg"
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <div>
            <h1>Select Gender</h1>

            <Form.Select aria-label="Default select example">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>

            <div className="modal-btn">
              <Button onClick={closeModal} title="Continue" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GenderModal;
