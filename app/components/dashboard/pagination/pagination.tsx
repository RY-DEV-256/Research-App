import React from 'react';
import styles from "./pagination.module.css";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

const Pagination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <p>Page 1 of 2.</p>
      </div>
      <div className={styles.pageNavigation}>
        <a href="#" className="btn btn-secondary btn-sm me-2"><MdOutlineNavigateBefore className={styles.button}/> <span className={styles.text}>Previous</span></a>
        <a href="#" className="btn btn-secondary btn-sm"><span className={styles.text}>Next</span> <MdOutlineNavigateNext className={styles.button}/> </a>
      </div>
    </div>
  )
}

export default Pagination;
