import ClearanceContext from "../context/StateContext";
import { useContext } from "react";

const Step4 = () => {
  const { setDob, setSoc, setCiscoCert } = useContext(ClearanceContext);

  const handleDob = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDob(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSoc = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSoc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handlecisco = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCiscoCert(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-14 items-center">
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">
          Upload Date of Birth Certificate
        </label>
        <input
          type="file"
          onChange={handleDob}
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">
          Upload State of Origin Certificate
        </label>
        <input
          type="file"
          onChange={handleSoc}
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">
          Upload Cisco Certificate
        </label>
        <input
          type="file"
          onChange={handlecisco}
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
        />
      </div>
    </div>
  );
};

export default Step4;
