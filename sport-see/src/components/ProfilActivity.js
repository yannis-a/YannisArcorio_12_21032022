import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 *
 * @components
 */
const ProfilActivity = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="bg-red p-3 rounded-md">
          <p className="text-white mb-4">{payload[0].value} kg</p>
          <p className="text-white">{payload[1].value} Kcal</p>
        </div>
      );
    }

    return null;
  };

  const FormattedLegend = (value, entry, index) => {
    if (index === 0) {
      return <span>Poids (kg)</span>;
    } else {
      return <span>Calories brûlées (kCal)</span>;
    }
  };
  return (
    <div className="activity">
      <div className="title">Activité quotidienne</div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          barSize={7}
          Label="coucou"
        >
          <CartesianGrid strokeDasharray="2 1" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis orientation="right" axisLine={false} tickLine={true} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            align="right"
            iconType="circle"
            formatter={FormattedLegend}
          />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfilActivity;
