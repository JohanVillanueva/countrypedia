import React, {
  PropsWithChildren, useEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Button } from '../styling/components';

const StyledModal = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  align-items: center;
  justify-content: center;
  z-index: 2;
  display: none;

  & .Modal__body {
    overflow: hidden;
    width: 90%;
    max-width: 700px;
    background: white;
    border-radius: 1rem;
    z-index: 2;
    position: relative;

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

  }

  &.open {
    display: flex;
  }
`;

const modalContainer = document.getElementById('modal-overlay-container');

interface ModalProps{
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = (
  { children, open, onClose }: PropsWithChildren<ModalProps>,
) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  useEffect(() => {
    setIsOpen(open);
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return createPortal(
    isOpen ? (
      <StyledModal className={isOpen ? 'open' : 'close'}>
        <article className="Modal__body">
          <Button className="close-button" onClick={onClose}>x</Button>
          {children}
        </article>
      </StyledModal>
    ) : null,
    modalContainer,
  );
};

export default Modal;
