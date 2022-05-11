import React from "react";
import { PieChart, Pie } from "recharts";

const ProfilScore = ({ data }) => {
  console.log(data);
  return (
    <div className="score">
      <PieChart width="100%">
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={150}
          fill="#82ca9d"
        />
      </PieChart>
    </div>
  );
};

export default ProfilScore;
