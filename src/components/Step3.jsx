import ClearanceContext from "../context/StateContext";
import { useContext } from "react";

const Step3 = () => {
  const { setOgAdmissionLetter, setClearanceFee } =
    useContext(ClearanceContext);

  const handleOgAdmissionLetterChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOgAdmissionLetter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleClearanceFee = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setClearanceFee(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-14 items-center">
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">
          Upload OGITECH Admission Letter
        </label>
        <input
          type="file"
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
          onChange={handleOgAdmissionLetterChange}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">
          Upload Clearance Fee Payment Receipt
        </label>
        <input
          type="file"
          onChange={handleClearanceFee}
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
        />
      </div>
    </div>
  );
};

export default Step3;
