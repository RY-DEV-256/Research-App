"use client"
import Modal from "react-bootstrap/Modal";
import styles from "./modalAdd.module.css";
import Button from "react-bootstrap/Button";
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const ModalDelete: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
 
  // if (!isOpen) return null;

  return (
    <>
      <Modal
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
