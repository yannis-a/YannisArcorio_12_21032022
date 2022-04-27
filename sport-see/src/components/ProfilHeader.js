import React from "react";

const profilHeader = ({ data }) => {
  return (
    <div className="header">
      <h1>
        Bonjour <span>{data.firstName}</span>
      </h1>
      <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
    </div>
  );
};

export default profilHeader;
