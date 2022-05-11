import React from "react";

const Error = ({ title, content }) => {
  return (
    <div className="error">
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold">{title}</span>
      </div>
      <span className="font-normal my-8">{content}</span>
    </div>
  );
};

export default Error;
