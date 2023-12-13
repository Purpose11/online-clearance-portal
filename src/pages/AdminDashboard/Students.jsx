import { useContext } from "react";
import { Link } from "react-router-dom";
import ClearanceContext from "../../context/StateContext";
const Students = () => {
  const { uploadedImage } = useContext(ClearanceContext);
  return (
    <div>
      <h1 className="font-bold text-2xl mt-6 ml-20">Admin Dashboard</h1>
      <h2 className="font-bold text-xl mt-6 ml-20">Students List</h2>
      <div className="w-[80%] h-fit mx-auto  mt-10 flex items-center justify-between">
        <img src={uploadedImage} className="h-[100px]" />
        <h2 className="text-lg font-semibold">ADEKUNLE John Emmanuel</h2>
        <h2 className="text-lg font-semibold">johnadekunle@gmail.com</h2>
        <h2 className="text-lg font-semibold">ST1102</h2>
        <Link to={"/clearance_info"}>
          {" "}
          <button className=" w-[200px] h-[40px] rounded bg-main text-white font-bold cursor-pointer">
            View Student
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Students;
