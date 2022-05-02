import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProfilObjectifs = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="bg-white p-2 rounded-md">
          <p className="font-medium text-xs">{payload[0].value}min</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="objectifs">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          data={data}
          margin={{
            top: 65,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="axeX"
            axisLine={false}
            tickLine={false}
            stroke="#000"
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="axeY"
            stroke="#fff"
            dot={false}
            activeDot={{ r: 4 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfilObjectifs;
