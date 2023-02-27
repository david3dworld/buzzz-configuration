import React, { ReactNode } from 'react';
import { Modal } from 'react-bootstrap';

interface IProps {
  children: ReactNode;
  show: boolean;
  handleClose: () => void;
  size?: 'sm' | 'lg' | 'xl' | any; // added 'any' cause of weird ts error issue from react-bootstrap
  centered?: boolean;
  className?: string;
}

const ModalContainer = (props: IProps) => {
  const { children, handleClose, show, size, centered, className } = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size={size || 'lg'}
      centered={centered}
      className={className}
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
