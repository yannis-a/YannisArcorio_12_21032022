import React from "react";

const profilHeader = ({ data }) => {
  return (
    <div className="header">
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default profilHeader;
