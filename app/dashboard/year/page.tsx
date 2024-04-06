import React from 'react';
import styles from './year.module.css'
import Search from '@/app/components/dashboard/search/search';
import ModalAdd from '@/app/components/dashboard/modalAdd/modalAdd';
import FormAdd from '@/app/components/dashboard/year/formAdd';
import YearTable from '@/app/components/dashboard/year/table';
import Pagination from '@/app/components/dashboard/pagination/pagination';
const YearPage = () => {
  return (
    <div>
      <div className={styles.topContent}>
        <Search placeholder='Search for year'/>
        <ModalAdd>
          <FormAdd/>
        </ModalAdd>
      </div>
      <YearTable/>
      <Pagination/>
    </div>
  )
}

export default YearPage;
