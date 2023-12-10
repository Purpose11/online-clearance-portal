import Login from "./pages/Login";
import StudentInfo from "./pages/StudentInfo";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student/:id" element={<StudentInfo />} />
      </Routes>
    </>
  );
}

export default App;
