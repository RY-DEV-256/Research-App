import CommentTable from '@/app/components/dashboard/comment/table';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import React from 'react';
import styles from './comments.module.css'
const CommentsPage = () => {
  return (
    <div>
      <div className={styles.search}>
        <Search placeholder='Search for comment'/>
      </div>
      <CommentTable/>
      <Pagination/>
    </div>
  )
}

export default CommentsPage;
