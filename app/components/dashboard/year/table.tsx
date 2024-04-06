"use client"
import React, { useState } from "react";
import styles from "./table.module.css";
import { MdDelete, MdEditSquare } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormEdit from "./formEdit";
const YearTable = () => {
  // ===============modal edit state===================
  const [isModalEditOpen, setModalEditOpen] = useState(false);
  const openModalEdit = () => setModalEditOpen(true);
  const closeModalEdit = () => setModalEditOpen(false);

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
              <th>Year Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td className="d-flex">
                <button className="btn btn-primary btn-sm mx-2" onClick={openModalEdit} ><MdEditSquare className={styles.button}/> <span className={styles.text}>Edit</span></button>
                <button className="btn btn-danger btn-sm" onClick={openModalDelete}><MdDelete className={styles.button}/> <span className={styles.text}>Delete</span></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* ===============modal for edit==========================  */}
      <Modal
        show={isModalEditOpen}
        onHide={closeModalEdit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Year</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEdit/>
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
          <Modal.Title> <span className="text-danger">Delete Year</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this Year?
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

export default YearTable;
