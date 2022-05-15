import React from "react";
import PropTypes from "prop-types";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

/**
 *
 * custom link for underline the link when its active
 * 
 * Called from {@link Navigation}
 * 
 * @component
 */
const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

CustomLink.propTypes = {
  /**
   * children element of component
   */
   children: PropTypes.string.isRequired,

   /**
   * url of link
   */
   to : PropTypes.string.isRequired,

   /**
   * array of properties of component
   */
   props : PropTypes.array
};

export default CustomLink;
