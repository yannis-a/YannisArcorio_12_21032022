import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProfilObjectifs = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="bg-white p-2">
          <p>{payload[0].value}min</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="objectifs">
      <div className="title">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%">
        <LineChart
          data={data}
          margin={{
            top: 60,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="axeX"
            axisLine={false}
            tickLine={false}
            stroke="#fff"
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
