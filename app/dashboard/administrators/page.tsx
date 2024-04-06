import styles from "./administrators.module.css";
import AdministratorTable from "@/app/components/dashboard/administrator/table";
import Search from "@/app/components/dashboard/search/search";
import Pagination from "@/app/components/dashboard/pagination/pagination";
import ModalAdd from "@/app/components/dashboard/modalAdd/modalAdd";
import FormAdd from "@/app/components/dashboard/administrator/formAdd";
const AdminPage = () => {
 
  return (
    <>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <Search placeholder="Search for admin...." />

          <ModalAdd>
            <FormAdd />
          </ModalAdd>
        </div>

        <AdministratorTable />
        <Pagination />
      </div>
    </>
  );
};

export default AdminPage;
