import InquiryTable from '@/app/components/dashboard/inquiry/table';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import React from 'react';
import styles from './inquiries.module.css';
const InquiriesPage = () => {
  return (
    <div>
      <div className={styles.search}>
        <Search placeholder='Search for inquiry'/>
      </div>
      <InquiryTable/>
      <Pagination/>
    </div>
  )
}

export default InquiriesPage;
