import React from "react";

/**
 * page make up the error of the app
 * 
 * Call from {@link App}
 * 
 * @param {string} title title of the error
 * @param {string} content description the error
 * @component
 */
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
