import React from "react";
import styles from "./dashboard.module.css";
import Card from "../components/dashboard/dashboardHome/card";
import Example from "../components/dashboard/dashboardHome/pieChart";
import AreaChartGraph from "../components/dashboard/dashboardHome/areaChart";
import PieChartGraph from "../components/dashboard/dashboardHome/pieChart";
const DashboardPage = () => {
  return (
    <>
    <div className={styles.container}>
     <Card/>
    </div>
     <div className={styles.rechats}>
     <div className={styles.areaChart}>
      <h5>Area Chart showing total users.</h5>
     <AreaChartGraph/>
     </div>
     <div className={styles.pieChart}>
     <PieChartGraph/>
     </div>
     </div>
     
     </>
  );
};

export default DashboardPage;
