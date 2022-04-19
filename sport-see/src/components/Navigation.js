import React from "react";
import CustomLink from "./CustomLink";

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

export default Navigation;
