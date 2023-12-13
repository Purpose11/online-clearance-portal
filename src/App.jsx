import Login from "./pages/Login";
import StudentInfo from "./pages/StudentInfo";
import Nav from "./components/Nav";
import Clearance from "./pages/Clearance";
import ClearanceStatus from "./pages/ClearanceStatus";
import Students from "./pages/AdminDashboard/Students";
import ClearanceInfo from "./pages/AdminDashboard/ClearanceInfo";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student/:id" element={<StudentInfo />} />
        <Route path="/clearance" element={<Clearance />} />
        <Route path="/clearance_status" element={<ClearanceStatus />} />
        <Route path="/admin_dashboard" element={<Students />} />
        <Route path="/clearance_info" element={<ClearanceInfo />} />
      </Routes>
    </>
  );
}

export default App;
