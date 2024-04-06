import ModalAdd from '@/app/components/dashboard/modalAdd/modalAdd';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import FormAdd from '@/app/components/dashboard/program/formAdd';
import ProgramTable from '@/app/components/dashboard/program/table';
import Search from '@/app/components/dashboard/search/search';
import React from 'react';
import styles from './programs.module.css'
const ProgramPage = () => {
  return (
    <div>
      <div className={styles.topContent}>
        <Search placeholder='Search for program'/>
        <ModalAdd>
          <FormAdd/>
        </ModalAdd>
      </div>
      <ProgramTable/>
      <Pagination/>
    </div>
  )
}

export default ProgramPage;
