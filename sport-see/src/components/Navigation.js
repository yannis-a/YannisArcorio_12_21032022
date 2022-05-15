import React from "react";
import CustomLink from "./CustomLink";
import PropTypes from "prop-types";

/**
 * management of navigation with links
 * 
 * @param {json} navData 
 * @component
 */
const Navigation = ({navData}) => {
  return (
    <div className="navigation">
      <ul>
        {navData.map((data) => (
          <li key={data.id}>
            <CustomLink to={data.url}>
              {data.title}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  /**
   * data formatted
   */
  data: PropTypes.object.isRequired
};

export default Navigation;
