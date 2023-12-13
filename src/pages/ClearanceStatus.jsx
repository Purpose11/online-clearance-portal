import ogitech from "../assets/images/ogitech.png";
import cisco from "../assets/images/cisco.png";
import ClearanceContext from "../context/StateContext";
import { useContext, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ClearanceStatus = () => {
  const pdfRef = useRef();
  const downloadPdf = () => {
    const input = pdfRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("clearance_result.pdf");
    });
  };
  const { uploadedImage, ClearanceStatus } = useContext(ClearanceContext);
  return (
    <>
      <div className="w-[50%] h-fit mx-auto  mt-9 px-3 py-6" ref={pdfRef}>
        <header className="w-full flex items-center justify-between">
          <img src={ogitech} alt="ogitech logo" className="h-[60px]" />
          <div>
            <h2 className="font-bold text-[22px] text-center">
              Ogun State Institute Of Technology
            </h2>
            <p className="text-center text-base font-[500]">
              (Fomerly Gateway Polytechnic, igbesa)
            </p>
            <h2 className="text-lg font-semibold text-center">
              Information, Communication,Technology
            </h2>
            <p className=" italic text-xs font-semibold text-center">
              Website: www.ogitech.edu.ng
            </p>
          </div>
          <img src={cisco} alt="cisco logo" className="h-[50px]" />
        </header>
        <h1 className="font-bold uppercase text-center text-2xl mt-6">
          student clearance result
        </h1>
        <div className="w-[90%] mx-auto">
          {" "}
          <div className="flex  gap-6 w-full  mt-4">
            <img src={uploadedImage} className="h-[150px]" />
            <div className="flex flex-col gap-5">
              <p className="text-base">
                Registration Number: OGITECH/ST1102/04
              </p>
              <p className="text-base">Full Name: ADEKUNLE John Emmanuel</p>
              <p className="text-base">
                Email Address:{" "}
                <span className="underline">johnadekunle@gmail.com</span>
              </p>
              <h2 className="font-bold underline text-lg">Programme</h2>
              <p className="text-base">Programme: HND</p>
              <p className="text-base">
                Programme Type: <span className="uppercase">full time</span>
              </p>
            </div>
          </div>
          <div className=" mt-5">
            <h2 className="font-bold uppercase underline text-lg">
              clearance result
            </h2>
            <p className="mt-3 text-base capitalize">
              clearance status:{" "}
              <span className="uppercase">{ClearanceStatus}</span>
            </p>
          </div>
          <div className=" mt-5">
            <h2 className="font-bold uppercase underline text-lg">
              portal login details
            </h2>
            <p className="mt-3 text-base">
              Student ID: <span className="uppercase">st1102</span>
            </p>
            <p className="mt-3 text-base">
              Password: <span>student</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] mx-auto">
        {" "}
        <button
          className="bg-main text-white h-[40px] rounded px-2 mx-auto cursor-pointer"
          onClick={downloadPdf}
        >
          Download Clearance Slip
        </button>
      </div>
    </>
  );
};

export default ClearanceStatus;
