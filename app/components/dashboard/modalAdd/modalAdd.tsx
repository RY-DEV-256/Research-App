"use client"
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { MdAdd } from "react-icons/md";
import styles from "./modalAdd.module.css";
interface ModalProps {
  children: React.ReactNode;
}
const ModalAdd: React.FC<ModalProps> = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={handleShow}>
        <MdAdd className={styles.button} /> <span className={styles.text}>Add New</span>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAdd;
