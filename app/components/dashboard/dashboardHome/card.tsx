import React from 'react';
import styles from './card.module.css';
import { MdAdminPanelSettings, MdArrowForward, MdBookOnline, MdDomain, MdGroup, MdHouseSiding } from 'react-icons/md';
import Link from 'next/link';
const card = [
    {
        id: 1,
        title: "Cards",
        cardItem: [
            {
                id: 1,
                total: 4,
                title: "Total Administrators",
                path: "/dashboard/administrators",
                icon: <MdAdminPanelSettings />
            },
            {
                id: 2,
                total: 200,
                title: "Total Students",
                path: "/dashboard/students",
                icon: <MdGroup />
            },
            {
                id: 3,
                total: 10,
                title: "Total Faculties",
                path: "/dashboard/faculties",
                icon: <MdHouseSiding />
            },
            {
                id: 4,
                total: 15,
                title: "Total Departments",
                path: "/dashboard/departments",
                icon: <MdDomain />
            },
            {
                id: 5,
                total: 20,
                title: "Total Programs",
                path: "/dashboard/programs",
                icon: <MdBookOnline />
            }
        ],
    }
];
const Card = () => {
  return (
    <div >
        {card.map((cardMain)=>(
           <div  key={cardMain.id} className={styles.container}>
            {cardMain.cardItem.map((cardItem)=>(
                <div className={styles.box} key={cardItem.id}>
                    <span className={styles.span}> <h5>{cardItem.icon}</h5> <h5 className={styles.h5}>{cardItem.title}</h5></span>
                    <h3 className={styles.total}>{cardItem.total}</h3>
                    <Link className={styles.link} href={cardItem.path}>View all <MdArrowForward /></Link>
                </div>

            ))}
</div>

        ))}
      
    </div>
  )
}

export default Card;
