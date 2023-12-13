import ClearanceContext from "../context/StateContext";
import { useContext } from "react";

const Step5 = () => {
  const { setStatementofResult } = useContext(ClearanceContext);

  const handStatementofResult = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStatementofResult(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-fit grid grid-cols-2 gap-14 items-center">
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">
          Upload Statement of Result
        </label>
        <input
          type="file"
          onChange={handStatementofResult}
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
        />
      </div>
    </div>
  );
};

export default Step5;
