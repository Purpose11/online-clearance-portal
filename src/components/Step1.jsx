import ClearanceContext from "../context/StateContext";
import { useContext } from "react";

const Step1 = () => {
  const { step1, setStep1 } = useContext(ClearanceContext);

  const handleDepartmentChange = (event) => {
    setStep1({ ...step1, department: event.target.value });
  };
  const handleLevelChange = (event) => {
    setStep1({ ...step1, level: event.target.value });
  };
  const handleProgrammeTypeChange = (event) => {
    setStep1({ ...step1, programme_type: event.target.value });
  };
  const handleSessionChange = (event) => {
    setStep1({ ...step1, session: event.target.value });
  };
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-14 items-center">
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">Select Department</label>
        <select
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
          value={step1.department}
          onChange={handleDepartmentChange}
        >
          <option className="text-base" value="Computer Science">
            Computer Science
          </option>
          <option className="text-base" value="Science Laboratory Technology">
            Science Laboratory Technology
          </option>
          <option className="text-base" value="Statistics">
            Statistics
          </option>
          <option className="text-base" value="Business Administration">
            Business Administration
          </option>
          <option className="text-base" value="Public Administration">
            Public Administration
          </option>
          <option className="text-base" value=" Banking And Finance">
            Banking And Finance
          </option>
          <option className="text-base" value="Taxation">
            Taxation
          </option>
          <option className="text-base" value="Computer Engineering">
            Computer Engineering
          </option>
          <option className="text-base" value="Mechanical Engineering">
            Mechanical Engineering
          </option>
          <option className="text-base" value="Civil Engineering">
            Civil Engineering
          </option>
          <option
            className="text-base"
            value="Electrical and Electronics Engineering "
          >
            Electrical and Electronics Engineering
          </option>
          <option className="text-base" value="Mass Commnunication">
            Mass Commnucation
          </option>
          <option className="text-base" value="Architecture">
            Architecture
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">Select Level</label>
        <select
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
          value={step1.level}
          onChange={handleLevelChange}
        >
          <option className="text-base" value="ND1">
            ND1
          </option>
          <option className="text-base" value="ND2">
            ND2
          </option>
          <option className="text-base" value="HND1">
            HND1
          </option>
          <option className="text-base" value=" HND2">
            HND2
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">
          Select Programme Type
        </label>
        <select
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
          value={step1.programme_type}
          onChange={handleProgrammeTypeChange}
        >
          <option className="text-base" value="Full Time">
            Full Time
          </option>
          <option className="text-base" value="Part Time">
            Part Time
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold text-main text-lg">Select Session</label>
        <select
          className=" w-[300px] h-[40px] rounded border border-main cursor-pointer text-base outline-none px-2"
          onChange={handleSessionChange}
          value={step1.session}
        >
          <option className="text-base" value="2019/2020">
            2019/2020
          </option>
          <option className="text-base" value="2020/2021">
            2020/2021
          </option>
          <option className="text-base" value="2021/2022">
            2021/2022
          </option>
          <option className="text-base" value="2022/2023">
            2022/2023
          </option>
        </select>
      </div>
    </div>
  );
};

export default Step1;
