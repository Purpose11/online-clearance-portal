import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { FaUpload } from "react-icons/fa6";
import { TbLayersSubtract } from "react-icons/tb";
import ClearanceContext from "../../src/context/StateContext";

const StudentInfo = () => {
  const { isClearanceDone, uploadedImage, setUploadedImage } =
    useContext(ClearanceContext);
  const { id } = useParams();

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
      localStorage.setItem("uploadedImage", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <h1 className="pl-[100px] capitalize text-xl mt-7">
        dashboard-{id}-2022/2023 academic session
      </h1>
      <div className="w-[70%] h-fit mx-auto mt-12 flex justify-between">
        <div className="w-[30%] h-fit">
          <div className="w-full h-[56px] bg-main flex items-center justify-center uppercase text-white font-openSans text-xl font-bold rounded">
            student information
          </div>
          <div className="border border-gray-300 py-5 h-fit w-full mt-1 rounded">
            {!uploadedImage && (
              <p className="text-center mt-3">Upload a passport photograph</p>
            )}
            <div className="w-[60%] h-[200px] border border-black mx-auto mt-4 flex flex-col items-center justify-center">
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : (
                <BiSolidUser className="w-full h-full text-gray-500" />
              )}
            </div>
            {!uploadedImage && (
              <>
                <label
                  htmlFor="upload-photo"
                  className="flex gap-[5px] items-center justify-center bg-main w-[60%] h-[30px] mx-auto text-white text-base mt-2 font-bold cursor-pointer"
                >
                  <FaUpload />
                  UPLOAD
                </label>
                <input
                  type="file"
                  id="upload-photo"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </>
            )}
            <h3 className="uppercase text-xl text-center mt-2">Adekunle</h3>
            <h3 className="text-center text-xl capitalize">John Emmanuel</h3>
          </div>
        </div>
        <div className="w-[65%] h-fit border border-gray-300 py-3 px-4 rounded shadow-sm">
          <div className="w-full h-[50px] flex items-center text-3xl capitalize gap-1">
            <TbLayersSubtract className=" flex-shrink-0" />
            <h2>general information</h2>
          </div>
          <div className="w-full h-fit border-y border-gray-300 flex justify-between">
            <div className="w-[30%] h-fit border border-gray-300 flex flex-col gap-[20px]  py-2 pl-2 font-semibold capitalize text-base">
              <h2 className="border-b border-gray-300">gender</h2>
              <h2 className="border-b border-gray-300">Email</h2>
              <h2 className="border-b border-gray-300">Phone Number</h2>
              <h2 className="border-b border-gray-300">date of birth</h2>
              <h2 className="border-b border-gray-300">nationality</h2>
              <h2 className="border-b border-gray-300">state of origin</h2>
              <h2 className="">L.G.A.</h2>
            </div>
            <div className="w-[65%] h-fit border border-gray-300 flex flex-col gap-[20px]  py-2 pl-2 text-base">
              <h2 className="border-b border-gray-300">MALE</h2>
              <h2 className="border-b border-gray-300">
                johnadekunle@gmail.com
              </h2>
              <h2 className="border-b border-gray-300">08022311670</h2>
              <h2 className="border-b border-gray-300">June 8th, 2001</h2>
              <h2 className="border-b border-gray-300">Nigeria</h2>
              <h2 className="border-b border-gray-300">Kwara</h2>
              <h2 className=" uppercase">Ifelodun</h2>
            </div>
          </div>

          {isClearanceDone ? (
            <Link to="/clearance_status">
              <button className="mt-5 w-[200px] h-[40px] bg-main text-white cursor-pointer rounded capitalize text-base">
                Check Clearance Status
              </button>
            </Link>
          ) : (
            <Link to="/clearance">
              <button className="mt-5 w-[200px] h-[40px] bg-main text-white cursor-pointer rounded capitalize text-base">
                start clearance
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentInfo;
