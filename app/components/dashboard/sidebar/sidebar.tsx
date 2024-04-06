"use client"
import React from 'react';
import styles from "./sidebar.module.css";
import Image from 'next/image';
import { MdAdminPanelSettings, MdDashboard, MdDomain, MdGroup, MdHouseSiding,  MdHomeWork, MdBookOnline, MdCalendarMonth, MdDataset, MdNote, MdMarkunread, MdComment, MdChatBubble, MdClear  } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menu = [
    {
        id: 1,
        title: "Pages",
        listItem: [
            {
                id: 1,
                title: "Dashbord",
                path: "/dashboard",
                icon: <MdDashboard/>
            },
            {
                id: 2,
                title: "Administrators",
                path: "/dashboard/administrators",
                icon: <MdAdminPanelSettings />
            },
            {
                id: 3,
                title: "Students",
                path: "/dashboard/students",
                icon: <MdGroup />
            }
        ],
    },
  
    {
        id: 3,
        title: "Manage",
        listItem: [
            {
                id: 1,
                title: "faculties",
                path: "/dashboard/faculties",
                icon: <MdHouseSiding />
            },
            {
                id: 2,
                title: "departments",
                path: "/dashboard/departments",
                icon: <MdDomain />
            },
            {
                id: 3,
                title: "Programs",
                path: "/dashboard/programs",
                icon: <MdBookOnline />
            },
            {
                id: 4,
                title: "year",
                path: "/dashboard/year",
                icon: <MdCalendarMonth />
            },
            {
                id: 5,
                title: "chats",
                path: "/dashboard/chats",
                icon: <MdChatBubble />
            },
            {
                id: 6,
                title: "Comments",
                path: "/dashboard/comments",
                icon: <MdComment />
            },
            {
                id: 7,
                title: "Inquiries",
                path: "/dashboard/inquiries",
                icon: <MdMarkunread />
            },
            {
                id: 8,
                title: "Proposals",
                path: "/dashboard/proposals",
                icon: <MdNote />
            },
            {
                id: 9,
                title: "Modules",
                path: "/dashboard/modules",
                icon: <MdDataset />
            },
        ],
    },
];
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Image src="/images/lira.png" width={80} height={80} alt=''/>
            <div className={styles.close}><MdClear /></div>
        </div>
        <div className={styles.navLinks}>
        {menu.map((item)=>(
          <div className={styles.item} key={item.id}>
            <span className={styles.title}>{item.title}</span>
            {item.listItem.map((item2)=>(
              <Link href={item2.path} className={`${styles.links} ${pathname === item2.path && styles.active}`} key={item2.id}>
                <span className={styles.icon}>{item2.icon}</span>
                <span className={styles.link}>{item2.title}</span>
              </Link>
            ))}
          </div>
        ))}
        </div>
    </div>
  )
}

export default Sidebar;
