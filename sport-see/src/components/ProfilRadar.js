import React from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * graph of performance
 * 
 * Call from {@link Profile}
 * 
 * @param {json} data json formatted according to the specific need of the card
 * @component
 */
const ProfilRadar = ({ data }) => {
  return (
    <div className="radar">
      <ResponsiveContainer width="100%">
        <RadarChart
          data={data}
          margin={{ top: 0, right: 25, bottom: 0, left: 25 }}
        >
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="label" fontSize={10} stroke="#fff" />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7}  />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

ProfilRadar.propTypes = {
  /**
   * data formatted
   */
  data: PropTypes.array.isRequired
};

export default ProfilRadar;
