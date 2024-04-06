"use client";
import React from "react";
import { MdLogout, MdMenu } from "react-icons/md";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.start}>
        <MdMenu className={styles.menu}/>
        <span className={styles.pathname}>{pathname.split("/").pop()}</span>
      </div>
      <div className={styles.end}>
        <Image className={styles.image} src="/images/0.jpeg" width={40} height={40} alt="" />
        <span className={styles.name}>Admin</span>
        <button className="btn btn-danger btn-sm">
          <MdLogout className={styles.logoutIcon}/> <span className={styles.logout}> Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
