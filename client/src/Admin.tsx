
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from "./component/admin/navbar";
import AdminRouter from "./router/adminRouter";

export default function Admin() {
  return (
    <>
      <AdminNavbar />
      <AdminRouter />
      <ToastContainer />
    </>
  )
}