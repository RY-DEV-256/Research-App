import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import StudentTable from '@/app/components/dashboard/student/table';
import React from 'react';
import styles from './students.module.css'
const StudentPage = () => {
  return (
    <>
    <div className={styles.search}>
      <Search placeholder='Search for student'/>
    </div>
      <StudentTable/>
      <Pagination/>
    </>
  )
}

export default StudentPage;
