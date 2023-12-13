import { useState, useContext } from "react";
import ClearanceContext from "../context/StateContext";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import Modal from "../components/Modal";

const Clearance = () => {
  const [step, setStep] = useState(1);
  let [isOpen, setIsOpen] = useState(false);
  const { setIsClearanceDone } = useContext(ClearanceContext);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const totalStep = 5;

  const handleNext = () => {
    if (step < totalStep) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleClearanceFinish = () => {
    setIsClearanceDone(true);
    openModal();
  };
  return (
    <div className="w-[70%] mx-auto mt-[50px] h-fit relative px-4 py-5 flex flex-col gap-20 border border-main rounded-lg">
      <Modal isOpen={isOpen} closeModal={closeModal} />
      <div className="flex flex-col gap-10">
        <h1 className="text-lg font-bold">
          Step {step} of {totalStep}
        </h1>
        <div>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
        </div>
      </div>
      <div className="flex justify-end gap-[30px] items-center">
        {step > 1 && (
          <button
            onClick={handlePrev}
            className="w-[200px] h-[50px] rounded cursor-pointer bg-main text-white font-bold text-lg"
          >
            Prev
          </button>
        )}
        {step === totalStep ? (
          <button
            className="w-[200px] h-[50px] rounded cursor-pointer bg-main text-white font-bold text-lg ml-4"
            onClick={handleClearanceFinish}
          >
            Finish
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-[200px] h-[50px] rounded cursor-pointer bg-main text-white font-bold text-lg ml-4"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Clearance;
