import React from "react";

const profilHeader = ({ data }) => {
  return (
    <div className="header">
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
    </div>
  );
};

export default profilHeader;
