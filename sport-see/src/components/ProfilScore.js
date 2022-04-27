import React from "react";
import { PieChart, Pie } from "recharts";

const ProfilScore = ({ data }) => {
  
  return (
    <div className="score">
      <PieChart width={730} height={250}>
        <Pie
          data={0.5}
          dataKey="value"
          innerRadius={90}
          outerRadius={100}
          startAngle={90}
          endAngle={450}
          strokeWidth="2"
        />
      </PieChart>
    </div>
  );
};

export default ProfilScore;
