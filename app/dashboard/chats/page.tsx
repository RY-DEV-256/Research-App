import ChatTable from '@/app/components/dashboard/chat/table';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import React from 'react';
import styles from './chats.module.css';
const ChatsPage = () => {
  return (
    <div>
      <div className={styles.search}>
        <Search placeholder='Search for chat'/>
      </div>
      <ChatTable/>
      <Pagination/>
    </div>
  )
}

export default ChatsPage;
