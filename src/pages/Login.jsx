import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [logInAs, setLogInAs] = useState("Admin");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isFormValid = id !== "" && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ID:", id);
    console.log("Password:", password);
    console.log("LoginAs:", logInAs);
    if (id === "ST1102" && password === "student" && logInAs === "Admin") {
      alert("Login Sucessful!");
      navigate(`/student/${id}`);
    } else {
      alert("Login Failed!");
    }
  };

  return (
    <div className="w-[37%] shadow-lg h-fit mx-auto mt-[50px] rounded-lg  py-12 flex flex-col items-center justify-center">
      <h1 className="capitalize text-2xl font-openSans font-bold text-main">
        online clearance portal
      </h1>
      <form
        action=""
        className="w-[80%] h-fit mx-auto flex flex-col gap-[30px] mt-[20px]"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            className="w-full h-[56px] rounded border border-main px-2 text-base outline-secondary"
            placeholder={`${logInAs === "Admin" ? "Student" : "Admin"} ID`}
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full h-[56px] rounded border border-main pl-2 pr-[30px] text-base outline-secondary"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {showPassword ? (
            <AiOutlineEye
              className=" absolute bottom-[20px] right-[7px] shrink-0 lg:w-[16px] lg:h-[16px] w-[14px] h-[14px] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className=" absolute  bottom-[20px] right-[7px] shrink-0 lg:w-[16px] lg:h-[16px] w-[14px] h-[14px] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <button
          type="submit"
          className={`w-full h-[56px] ${
            isFormValid
              ? "bg-main cursor-pointer"
              : " bg-gray-400 cursor-not-allowed"
          } text-white text-base font-bold rounded`}
          disabled={!isFormValid}
        >
          Log In
        </button>
        <p className="text-base">
          Log in as{" "}
          <span
            className="font-bold text-main cursor-pointer"
            onClick={() =>
              logInAs === "Admin" ? setLogInAs("Student") : setLogInAs("Admin")
            }
          >
            {logInAs}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
