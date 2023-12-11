import Login from "./pages/Login";
import StudentInfo from "./pages/StudentInfo";
import Nav from "./components/Nav";
import Clearance from "./pages/Clearance";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student/:id" element={<StudentInfo />} />
        <Route path="/clearance" element={<Clearance />} />
      </Routes>
    </>
  );
}

export default App;
