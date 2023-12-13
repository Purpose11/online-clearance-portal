import ClearanceContext from "../../context/StateContext";
import { useContext } from "react";

const ClearanceInfo = () => {
  const {
    step1,
    olevelResult,
    jambAdmissionLetter,
    ogAdmissionLetter,
    clearanceFee,
    dob,
    soc,
    ciscoCert,
    statementofResult,
    setClearanceStatus,
    ClearanceStatus,
  } = useContext(ClearanceContext);

  const downloadImage = (imageURL, imageName) => {
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = imageName;
    link.click();
  };

  return (
    <>
      <div className="w-[80%] mx-auto flex items-center justify-between mt-6">
        <h1 className="font-bold text-2xl ">ADEKUNLE John Emmanuel</h1>
        <button
          className="h-[40px] w-[200px] bg-main text-white rounded cursor-pointer"
          onClick={() => setClearanceStatus("cleared")}
        >
          {ClearanceStatus === "pending" ? "Approve" : "Approved"}
        </button>
      </div>

      <div className="w-[80%] mx-auto text-lg flex flex-col gap-6  mt-8">
        <h2>
          Department - <span>{step1.department}</span>
        </h2>
        <h2>
          Level - <span>{step1.level}</span>
        </h2>
        <h2>
          Programme Type - <span>{step1.programme_type}</span>
        </h2>
        <h2>
          Session - <span>{step1.session}</span>
        </h2>
        <h2>
          Clearance Status -{" "}
          <span className="uppercase">{ClearanceStatus}</span>
        </h2>
        <div className="flex items-center gap-3">
          <h1>O&rsquo; Level Result -</h1>
          <button
            type="button"
            className="h-[40px] w-[100px] bg-main text-white font-semibold text-base rounded"
            onClick={() => downloadImage(olevelResult, "Olevel_Result.jpg")}
          >
            View
          </button>
        </div>
        <div className="flex items-center gap-3">
          <h1>Jamb Admission Letter -</h1>
          <button
            type="button"
            className="h-[40px] w-[100px] bg-main text-white font-semibold text-base rounded"
            onClick={() =>
              downloadImage(jambAdmissionLetter, "jamb_Admission.jpg")
            }
          >
            View
          </button>
        </div>
        <div className="flex items-center gap-3">
          <h1>Ogitech Admission Letter-</h1>
          <button
            type="button"
            className="h-[40px] w-[100px] bg-main text-white font-semibold text-base rounded"
            onClick={() =>
              downloadImage(ogAdmissionLetter, "ogitech_Admission.jpg")
            }
          >
            View
          </button>
        </div>
        <div className="flex items-center gap-3">
          <h1>Clearance Fee Receipt -</h1>
          <button
            type="button"
            className="h-[40px] w-[100px] bg-main text-white font-semibold text-base rounded"
            onClick={() =>
              downloadImage(clearanceFee, "clearance-fee_receipt.jpg")
            }
          >
            View
          </button>
        </div>
        <div className="flex items-center gap-3">
          <h1>D.O.B Certificate -</h1>
          <button
            type="button"
            className="h-[40px] w-[100px] bg-main text-white font-semibold text-base rounded"
            onClick={() => downloadImage(dob, "DOB.jpg")}
          >
            View
          </button>
        </div>
        <div className="flex items-center gap-3">
          <h1>State of Origin -</h1>
          <button
            type="button"
            className="h-[40px] w-[100px] bg-main text-white font-semibold text-base rounded"
            onClick={() => downloadImage(soc, "state_origin.jpg")}
          >
            View
          </button>
        </div>
        <div className="flex items-center gap-3">
          <h1>Cisco Certificate -</h1>
          <button
            type="button"
            className="h-[40px] w-[100px] bg-main text-white font-semibold text-base rounded"
            onClick={() => downloadImage(ciscoCert, "cisco.jpg")}
          >
            View
          </button>
        </div>
        <div className="flex items-center gap-3">
          <h1>Statement of Result -</h1>
          <button
            type="button"
            className="h-[40px] w-[100px] bg-main text-white font-semibold text-base rounded"
            onClick={() => downloadImage(statementofResult, "result.jpg")}
          >
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default ClearanceInfo;
