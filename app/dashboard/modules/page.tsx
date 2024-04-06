import ModuleTable from '@/app/components/dashboard/module/table';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import React from 'react';
import styles from './modules.module.css'
const ModulesPage = () => {
  return (
    <div>
      <div className={styles.search}>
      <Search placeholder='Search for module'/>
      </div>
      <ModuleTable/>
      <Pagination/>
    </div>
  )
}

export default ModulesPage;
