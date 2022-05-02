import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const ProfilRadar = ({ data }) => {
  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart
          data={data}
          margin={{ top: 0, right: 25, bottom: 0, left: 25 }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="label" fontSize={10} stroke="var(--white)" />
          <PolarRadiusAxis domain={[0, 250]} axisLine={false} tick={false} />
          <Radar dataKey="value" strokeWidth={0} fill="var(--primary-opac)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfilRadar;
