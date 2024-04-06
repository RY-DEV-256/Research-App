import FacultyTable from '@/app/components/dashboard/faculty/table';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import React from 'react';
import styles from './faculties.module.css';
import ModalAdd from '@/app/components/dashboard/modalAdd/modalAdd';
import FormAdd from '@/app/components/dashboard/faculty/formAdd';
const FacultyPage = () => {
  return (
    <>
    <div className={styles.search}>
      <Search placeholder='Search for faculty'/>
      <ModalAdd>
        <FormAdd/>
      </ModalAdd>
    </div>
      <FacultyTable/>
      <Pagination/>
    </>
  )
}

export default FacultyPage;
