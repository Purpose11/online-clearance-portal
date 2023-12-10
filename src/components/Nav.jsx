import { FaPhoneFlip } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import youtube from "../assets/images/youtube.svg";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.png";
import ogitech from "../assets/images/ogitech.png";

const Nav = () => {
  return (
    <>
      <div className="w-full bg-secondary h-[40px] flex item-center justify-between px-20">
        <div className=" flex items-center gap-[15px] text-sm">
          <div className="flex items-center gap-[5px] text-white">
            <FaPhoneFlip className="text-sm flex-shrink-0" />
            <p className="tex-sm">081252628722</p>
          </div>
          <div className="flex items-center gap-[5px] text-white">
            <IoMdMailOpen className="text-sm flex-shrink-0" />
            <p className="text-sm">info@ogitech.edu.ng</p>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <img
            src={facebook}
            className="h-[16px] cursor-pointer"
            alt="facebook-logo"
          />
          <img
            src={youtube}
            className="h-[16px] cursor-pointer"
            alt="youtube-logo"
          />
          <img
            src={twitter}
            className="h-[16px] cursor-pointer"
            alt="twitter-logo"
          />
          <img
            src={instagram}
            className="h-[16px] cursor-pointer"
            alt="instagram-logo"
          />
          <img
            src={linkedin}
            className="h-[16px] cursor-pointer"
            alt="linkedin-logo"
          />
        </div>
      </div>
      <div className="w-full bg-main h-[70px] flex items-center justify-between px-20">
        <img src={ogitech} className="h-[60px]" />
        <div className=" flex items-center gap-[25px] text-white">
          <h3 className="text-base font-[500] flex items-center gap-[5px] cursor-pointer">
            OGITECH{" "}
            <span>
              {" "}
              <AiOutlineCaretDown className="text-sm flex-shrink-0" />
            </span>
          </h3>
          <h3 className="text-base font-[500] flex items-center gap-[5px] cursor-pointer">
            Governance
            <span>
              {" "}
              <AiOutlineCaretDown className="text-sm flex-shrink-0" />
            </span>
          </h3>
          <h3 className="text-base font-[500] flex items-center gap-[5px] cursor-pointer">
            Admissions
            <span>
              {" "}
              <AiOutlineCaretDown className="text-sm flex-shrink-0" />
            </span>
          </h3>
          <h3 className="text-base cursor-pointer">E-PORTAL</h3>
          <h3 className="text-base font-[500] flex items-center gap-[5px] cursor-pointer">
            Schools
            <span>
              {" "}
              <AiOutlineCaretDown className="text-sm flex-shrink-0" />
            </span>
          </h3>
          <h3 className="text-base font-[500] flex items-center gap-[5px] cursor-pointer">
            Units
            <span>
              {" "}
              <AiOutlineCaretDown className="text-sm flex-shrink-0" />
            </span>
          </h3>

          <button className="bg-secondary rounded h-[50px] w-[150px] cursor-pointer">
            Staff Webmail
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
