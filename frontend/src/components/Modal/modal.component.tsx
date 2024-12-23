/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from 'formik';
import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
  title: string;
  children: ReactNode;
  formik: FormikProps<any>;
  isOpen: boolean;
  closeModal: () => void;
};

const Modal = ({ title, children, formik, isOpen, closeModal }: ModalProps) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid #000',
      backgroundColor: '#282e33',
      color: '#ffffff',
      width: '30%',
      textAlign: 'center' as const,
    },

    overlay: {
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
  };

  ReactModal.setAppElement('#root');

  const TypedReactModal = ReactModal as unknown as React.FC<ReactModal.Props>;

  return (
    <TypedReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>{title}</h2>
      <form onSubmit={formik.handleSubmit}>{children}</form>
    </TypedReactModal>
  );
};

export default Modal;
