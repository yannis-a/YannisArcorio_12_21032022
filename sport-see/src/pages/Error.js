import React from "react";

const Error = ({ title, content }) => {
  return (
    <div className="error">
      <div>
        <h1>{title}</h1>
      </div>
      <span>{content}</span>
    </div>
  );
};

export default Error;
