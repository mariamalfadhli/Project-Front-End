import React from "react";

const ErrorMsg = ({ error }) => {
  if (!error) return "";
  const errorIs =
    error?.response?.data?.error?.message ||
    error?.response?.data?.error ||
    error?.response?.data ||
    error?.mesaage ||
    "Something went wrong!";
  return <div className="bg-red-300 p-3 rounded-md">{errorIs}</div>;
};

export default ErrorMsg;
