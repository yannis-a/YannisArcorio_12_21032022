import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

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

export default ProfilRadar;
