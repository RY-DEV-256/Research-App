"use client"
import React, { useState } from "react";
import styles from "./table.module.css";
import { MdDelete, MdVisibility } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ChatInfo from "./chatInfo";
const ChatTable = () => {
  // ===============modal view state===================
  const [isModalViewOpen, setModalViewOpen] = useState(false);
  const openModalView = () => setModalViewOpen(true);
  const closeModalView = () => setModalViewOpen(false);

  // ===============modal delete state===================
  const [isModaldeleteOpen, setModalDeleteOpen] = useState(false);
  const openModalDelete = () => setModalDeleteOpen(true);
  const closeModalDelete = () => setModalDeleteOpen(false);
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="d-flex">
                <button className="btn btn-success btn-sm mx-2" onClick={openModalView} ><MdVisibility className={styles.button}/> <span className={styles.text}>View</span></button>
                <button className="btn btn-danger btn-sm" onClick={openModalDelete}><MdDelete className={styles.button}/> <span className={styles.text}>Delete</span></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===============modal for view==========================  */}
      <Modal
        show={isModalViewOpen}
        onHide={closeModalView}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <span className="">Chat's Information</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <ChatInfo/>
        </Modal.Body>
      </Modal>

      {/* ===============modal for delete==========================  */}
      <Modal
        show={isModaldeleteOpen}
        onHide={closeModalDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <span className="text-danger">Delete chat</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this chat?
          <div className="d-flex mt-3 mb-3">
          <button className="btn btn-danger me-2">Delete</button>
          <Button variant="secondary" onClick={closeModalDelete}>
            Cancel
          </Button>
          </div>
        </Modal.Body>
      </Modal>
      </>
  );
};

export default ChatTable;
