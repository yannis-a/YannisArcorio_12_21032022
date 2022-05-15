import React from "react";
import PropTypes from "prop-types";

/**
 * header of profil page
 * 
 * Call from {@link Profile}
 * 
 * @param {json} data json formatted according to the specific need of the card
 * @component
 */
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

profilHeader.propTypes = {
  /**
   * data formatted
   */
  data: PropTypes.object.isRequired
};

export default profilHeader;
