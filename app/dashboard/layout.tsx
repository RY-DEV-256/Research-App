import Navbar from "../components/dashboard/navbar/navbar";
import Sidebar from "../components/dashboard/sidebar/sidebar";
import styles from "@/app/components/dashboard/dashboard-layout.module.css";

interface Props {
    children: JSX.Element
}

const DashboardLayout = ({children} : Props) => {
    return(
        <div className={styles.gridContainer}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main}>
          <div className={styles.navbarMain}>
            <Navbar />
          </div>
          <div className={styles.mainContent}>
            
            {children}

          
          </div>
        </div>
      </div>
    )
}
export default DashboardLayout;
