import ClearanceContext from "../context/StateContext";
import { useContext } from "react";

const Step2 = () => {
  const { setOlevelResult, setJambAdmissionLetter } =
    useContext(ClearanceContext);

  const handleOlevelResultChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOlevelResult(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleJambAdmissionLetterChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setJambAdmissionLetter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-14 items-center">
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">
          Upload O&rsquo; Level Result
        </label>
        <input
          type="file"
          onChange={handleOlevelResultChange}
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">
          Upload Jamb Admission Letter
        </label>
        <input
          type="file"
          onChange={handleJambAdmissionLetterChange}
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
        />
      </div>
    </div>
  );
};

export default Step2;
