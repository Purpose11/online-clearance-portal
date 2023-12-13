import { createContext, useState, useEffect } from "react";

const ClearanceContext = createContext();

// Context Provider component
export const ClearanceProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [step1, setStep1] = useState({
    department: "",
    level: "",
    programme_type: "",
    session: "",
  });
  const [olevelResult, setOlevelResult] = useState(null);
  const [jambAdmissionLetter, setJambAdmissionLetter] = useState(null);
  const [ogAdmissionLetter, setOgAdmissionLetter] = useState(null);
  const [clearanceFee, setClearanceFee] = useState(null);
  const [dob, setDob] = useState(null);
  const [soc, setSoc] = useState(null);
  const [ciscoCert, setCiscoCert] = useState(null);
  const [statementofResult, setStatementofResult] = useState(null);
  const [ClearanceStatus, setClearanceStatus] = useState("pending");
  const [uploadedImage, setUploadedImage] = useState(
    localStorage.getItem("uploadedImage") || null
  );
  const [isClearanceDone, setIsClearanceDone] = useState(() => {
    const storedIsClearanceDone = localStorage.getItem("isClearanceDone");
    return storedIsClearanceDone ? JSON.parse(storedIsClearanceDone) : false;
  });

  useEffect(() => {
    localStorage.setItem("isClearanceDone", JSON.stringify(isClearanceDone));
  }, [isClearanceDone]);

  // Value provided by the context
  const contextValue = {
    isClearanceDone,
    setIsClearanceDone,
    id,
    setId,
    uploadedImage,
    setUploadedImage,
    step1,
    setStep1,
    olevelResult,
    setOlevelResult,
    jambAdmissionLetter,
    setJambAdmissionLetter,
    ogAdmissionLetter,
    setOgAdmissionLetter,
    clearanceFee,
    setClearanceFee,
    dob,
    setDob,
    soc,
    setSoc,
    ciscoCert,
    setCiscoCert,
    statementofResult,
    setStatementofResult,
    ClearanceStatus,
    setClearanceStatus,
  };

  return (
    <ClearanceContext.Provider value={contextValue}>
      {children}
    </ClearanceContext.Provider>
  );
};

export default ClearanceContext;
