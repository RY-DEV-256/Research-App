import Pagination from '@/app/components/dashboard/pagination/pagination';
import ProposalTable from '@/app/components/dashboard/proposal/table';
import Search from '@/app/components/dashboard/search/search';
import React from 'react';
import styles from "./proposals.module.css";
const ProposalsPage = () => {
  return (
    <div>
      <div className={styles.search}>
        <Search placeholder='Search for proposal'/>
      </div>
     <ProposalTable/>
     <Pagination/>
    </div>
  )
}

export default ProposalsPage;
