import DepartmentTable from '@/app/components/dashboard/department/table';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import React from 'react';
import styles from './departments.module.css';
import ModalAdd from '@/app/components/dashboard/modalAdd/modalAdd';
import FormAdd from '@/app/components/dashboard/department/formAdd';
const DepartmentsPage = () => {
  return (
    <div>
      <div className={styles.topContent}>
        <Search placeholder='Search for department'/>
        <ModalAdd>
          <FormAdd/>
        </ModalAdd>
      </div>
      <DepartmentTable/>
      <Pagination/>
    </div>
  )
}

export default DepartmentsPage;
