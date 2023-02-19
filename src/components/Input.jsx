import React, { useState } from "react";
import hideImg from "../images/hide.png";
import showImg from "../images/show.png";
const InputField = ({
  placeholder,
  name,
  value,
  onBlur,
  onChange,
  iconImg,
  id,
  label,
  plain,
  type,
}) => {
  const [show, setShow] = useState(false);
  const toggleShowPassword = () => setShow((prev) => !prev);
  return (
    <div>
      <label className="text-sm text-grey mb-2">{label}</label>
      <div className="relative w-full">
        <div className="absolute cursor-pointer top-16 left-5">
          <img src={iconImg} alt="" className="w-4/5" />
        </div>
        <input
          className={`text-base mb-2 lg:mb-1 rounded bg-transparent border-[#595959] transition focus:border-[#171C33] focus:shadow-xxl shadow-xl h-12 outline-none w-full ${
            plain ? "p-4" : "pl-14"
          } text-[#171C33]`}
          placeholder={placeholder}
          name={name}
          value={value}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          type={type === "password" ? (show ? "text" : "password") : type}
        />
        {type === "password" && (
          <div
            className="absolute cursor-pointer top-3 right-5"
            onClick={toggleShowPassword}
          >
            {show ? (
              <img src={hideImg} alt="hide-icon" className="w-4/5" />
            ) : (
              <img src={showImg} alt="show-icon" className="w-4/5" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
