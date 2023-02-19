import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <p className="text-[#FF0000] mb-4 text-base font-medium">{children}</p>
  );
};

export default ErrorMessage;
